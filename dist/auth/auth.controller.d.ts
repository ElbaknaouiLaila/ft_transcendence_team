import { AuthService } from './auth.service';
import { JwtService } from 'src/jwt/jwtservice.service';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AuthController {
    private service;
    private jwt;
    private readonly prisma;
    constructor(service: AuthService, jwt: JwtService, prisma: PrismaService);
    Login(): void;
    redirect(req: any, res: any): any;
    getSessionToken(req: any): string;
    GenerateQrCode(req: any): Promise<any>;
    Verify_QrCode(body: any, req: any): Promise<string>;
    Insert_Friends(body: any, req: any): Promise<void>;
    Get_FriendsList(req: any): Promise<void>;
}
