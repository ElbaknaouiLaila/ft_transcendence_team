import { Injectable, Req, Body ,ForbiddenException} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from 'src/jwt/jwtservice.service';
import { CreateUserDto } from './nameDto';
import * as fs from 'fs';

@Injectable()
export class ProfileService {
    constructor(private prisma: PrismaService, private jwt:JwtService){}

    async ModifyName(dat :any, req :any, res :any){
        // const Token = req.cookies['cookie'];
        // const verifyToekn = this.jwt.verify(Token);
        // console.log(verifyToekn);
        // const name = verifyToekn.name;
        const name = 'Ayour'
        const newName = dat.name;
        // console.log('naaame ' + name);
        try{
            await this.prisma.user.update({
                where: {name},
                data: {
                    name : newName,
                },
            });
           
            const userInfos = this.jwt.verify(req.cookies['cookie']);
            userInfos.name = newName;
            // console.log(userInfos);
            res.cookie('cookie', this.jwt.sign(userInfos));

        }catch(error){
            if (error.code == 'P2002')
                res.status(400).json({error: 'name already exists'});
        }
    }

    async ModifyPhoto(photo:any, req:any, res:any) {

        // const verifyToken = this.jwt.verify(req.cookies['cookie']);
        // const name = verifyToken.name;
        const name =  'mmanouze';
        const filePath = '/nfs/homes/mmanouze/Desktop/oauth-42-project/uploads/' + photo.originalname; // Use the original name or generate a unique name
        fs.writeFileSync(filePath, photo.buffer);

        try{
            await this.prisma.user.update({
                where: {name},
                data: {
                    avatar : filePath,
                },
            });

            const userInfos = this.jwt.verify(req.cookies['cookie']);
            userInfos.avatar = filePath;
            // console.log(userInfos);
            res.cookie('cookie', this.jwt.sign(userInfos));
        }catch(error){
            console.log(error);
            // if (error.code == 'P2002')
                // res.status(400).json({error: 'name already exists'});
        }
    }
}

