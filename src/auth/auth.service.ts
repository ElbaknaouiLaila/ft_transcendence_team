import { ExecutionContext, Injectable, Res } from '@nestjs/common';
import { JwtService } from 'src/jwt/jwtservice.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { authenticator } from 'otplib';
import * as qrcode from 'qrcode';

@Injectable()
export class AuthService {

    constructor(private prisma: PrismaService, private jwt: JwtService){}

    LoginToFortyTwo(){
        return ({msg: 'we will finish this at the right time'});
    }

    async ValidateUsers(infos :any, req:any, res:any){
        try{

            const {id, email, login, first_name, last_name , displayname ,image} = infos;
            const obj = {id: id, login: login, fullname: displayname, image: image.link, email: email};

            const id_user = id;
            const find = await this.prisma.user.findUnique({
                where: {id_user},
            });
            if (find)
            {
                // if (find.TwoFactor)
                //     res.redirect('http://localhost:3000/auth/get-qrcode');
                // console.log('when we found the user in the data base');
                // console.log(find);
                return find;
            }
            await this.prisma.user.create({
                data : {
                    id_user : id,
                    name : login,
                    avatar : image.link,
                    TwoFactor : false,
                    status_user: "online",
                },
            });
            return obj;

        }catch(error){

            console.log(error);
        }
    }

    async GenerateQrCode(req:any){
        const sKey = authenticator.generateSecret();

        const decoded = this.jwt.verify(req.cookies['cookie']);
        const user =  await this.prisma.user.update({
            where: {id_user: decoded.id},
          data: { secretKey: sKey },
        });
        console.log(user);
        const otpAuthURL = authenticator.keyuri(decoded.email, 'YourAppName', sKey);
  
        const qrCodeDataURL =  qrcode.toDataURL(otpAuthURL);
        
        return qrCodeDataURL;
    }


    async Verify_QrCode(body:any, req:any){
              /* 98853 mmanouze */
      // console.log(body);
    //   const { code } = body;
      const decoded = this.jwt.verify(body.cookie);
      const user =  await this.prisma.user.findUnique({where: {id_user: decoded.id_user}});
      // const user = await this.prisma.user.findUnique({where: {id_user: decoded.id}});
        // console.log(user);
      if (authenticator.verify({token:body.code, secret: user.secretKey}))
        return ({msg: 'code is true ,you are permitted to pass'});
      else
        return ({msg: 'code ghalt ,ghayrha akhouya chwiya'});
    }

}
