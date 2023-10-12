import { Controller,
     Get,
      UseGuards,
       Redirect ,
        Post,
         Body,
          Res,
           Req} from '@nestjs/common';
import { AuthService } from './auth.service';
import { FortyTwoGuard } from './utils/Guards';
import { AuthGuard } from "@nestjs/passport";
import { JwtService } from 'src/jwt/jwtservice.service';
import { JwtAuthGuard } from 'src/jwt/JwtGuard';
import { PrismaService } from 'src/prisma/prisma.service';
import { authenticator } from 'otplib';
import * as qrcode from 'qrcode';

@Controller('auth')
export class AuthController {

    constructor(private service : AuthService, 
      private jwt:JwtService,
      private readonly prisma: PrismaService){}

    @Get('login/42')
    @UseGuards(AuthGuard('42'))
    Login(){}

    /************************************** */

    @Get('login/42/redirect')
    @UseGuards(AuthGuard('42'))
    redirect(@Req() req:any, @Res() res:any){

      const accessToken = this.jwt.sign(req.user);
      res.cookie('cookie', accessToken/*, { maxage: 99999 , secure: false}*/).status(200);
      // res.send('cookie well setted');
      res.redirect('http://localhost:3001/setting');

      return (req);
    }

    /************************************** */

    @Get('get-session-token')
    // @UseGuards(JwtAuthGuard)
    getSessionToken(@Req() req) {
      const sessionToken = this.jwt.verify(req.cookies['cookie']);
      return `Session Token: ${sessionToken}`;
    }

    /************************************** */

    @Get('get-qrcode')
    async GenerateQrCode(@Req() req){
      const qrCodeDataURL = await this.service.GenerateQrCode(req);
      return qrCodeDataURL;
    }

    /************************************** */

    @Post('verify-qrcode')
    async Verify_QrCode(@Body() body, @Req() req){

      const msg = await this.service.Verify_QrCode(body, req);
      return (msg.msg);

    }

    /************************************** */


    @Post('add-friends')
    async Insert_Friends(@Body() body, @Req() req){

      // const finduser = await this.prisma.
      // const finduser = await this.prisma.user.findUnique({where:{name:'lelbakna'}});
    
      const user = await this.prisma.user.update({
        where: {id_user: 98853},
        data: {
          freind:{
            create:{
              name : body.friend,
              id_freind: 90240,
            },
          },
        },
      });
    }


    /************************************** */


    @Get('get-friendsList')
    async Get_FriendsList(@Req() req){

      const decoded = this.jwt.verify(req.cookies['cookie']);
      const user = await this.prisma.user.findUnique({where:{id_user : decoded.id_user},});

      const friends = await this.prisma.user.findUnique({
        where:{id_user : decoded.id_user},
        include: {
          freind: {
              select: {id_freind :true},
          }
        }
      });

      const obj = friends.freind;
      let FriendList = {};

      const idFriends = obj.map((scope => scope.id_freind));
      for (const num of idFriends){
        // console.log(num);
        const OneFriend = await this.prisma.user.findUnique({
          where: {id_user: num},
        });
        const name = OneFriend.name;
        FriendList = { name : OneFriend};
      }
      const WantedObj = {AccountOwner: user, FriendList}; 
      const scoop = {FriendList};
      console.log(scoop);
      return (scoop);
    }


    /************************************** */


    @Get('friends')
    async only_friends(@Req() req){

      const decoded = this.jwt.verify(req.cookies['cookie']);
      // const user = await this.prisma.user.findUnique({where:{id_user : decoded.id_user},});

      const friends = await this.prisma.user.findUnique({
        where:{id_user : decoded.id_user},
        include: {
          freind: {
              select: {id_freind :true},
          }
        }
      });
      const obj = friends.freind;
      const idFriends = obj.map((scope => scope.id_freind));

      let array: any[] = [];

      for (const num of idFriends){
        // console.log(num);
        const OneFriend = await this.prisma.user.findUnique({
          where: {id_user: num},
        });
        // console.log(OneFriend);
        array.push(OneFriend);
      }
      console.log(array);
      return array;

    }

    /************************************** */

    @Get('get-user')
    // @UseGuards(JwtAuthGuard)
    async Get_User(@Req() req){

      const decoded = this.jwt.verify(req.cookies['cookie']);
      // console.log(req.cookies['cookie']);

      console.log(decoded);
      let obj: any[] = []
      const user = await this.prisma.user.findUnique({where:{id_user : decoded.id},});
      obj.push(user);
      return obj;
    }

    /************************************** */


    @Post('TwoFactorAuth')
    async TwofactorAuth(@Body() body, @Req() req){

      const decoded = this.jwt.verify(req.cookies['cookie']);
      const user = await this.prisma.user.update({
        where : {id_user : decoded.id},
        data :{
          TwoFactor: body.TwoFactor,
        },
      });
    }
}
