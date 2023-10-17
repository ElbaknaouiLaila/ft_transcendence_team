import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtService } from 'src/jwt/jwtservice.service';
export declare class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private jwt;
    constructor(jwt: JwtService);
    server: Server;
    handleConnection(client: Socket): any;
    handleDisconnect(client: Socket): void;
    handleUserOnline(client: Socket, payload: any): void;
    handleUserOffline(client: Socket, payload: any, header: any): void;
    handleMessage(body: any): string;
}
