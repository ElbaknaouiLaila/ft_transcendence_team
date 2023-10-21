import { Headers } from '@nestjs/common';
import { MessageBody, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server ,Socket} from 'socket.io';
import { JwtService } from 'src/jwt/jwtservice.service';

@WebSocketGateway()
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect{
  
  constructor(private jwt :JwtService){}

  @WebSocketServer() server: Server;

  handleConnection(client: Socket): any {
    // Handle new client connection
    // console.log(client);
    let cookieHeader : string  = '';
    cookieHeader = client.handshake.headers.cookies.toString(); // Get the entire cookie header as a string
    // // You can now parse and manipulate the cookie data as needed
    const cookies = cookieHeader.split(';').reduce((acc, cookie) => {
      const [name, value] = cookie.trim().split('=');
      acc[name] = value;
      return acc;
    }, {});

    // console.log(cookies['cookie']);
    // console.log(this.jwt.verify(cookies['cookie']));
    // Access a specific cookie
    // const specificCookie = cookies['cookie'];
    // const decoded = this.jwt.verify(specificCookie);
    // console.log('Received cookies:', cookies);
    // return (decoded);
  }

  handleDisconnect(client: Socket) {
    // Handle client disconnection
  }

  @SubscribeMessage('userOnline')
  handleUserOnline(client: Socket, payload: any) {
    // Handle when a user comes online
  }

  @SubscribeMessage('userOffline')
  handleUserOffline(client: Socket, payload: any, @Headers() header) {
    console.log(client);
    // this.handleConnection(client);
    // console.log(decoded);
    // console.log('lawaaal');
    // return (decoded);
    // Handle when a user goes offline
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() body): string {
    console.log(body);
    return 'Hello world!';
  }
}
