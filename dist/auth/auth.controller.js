"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const passport_1 = require("@nestjs/passport");
const jwtservice_service_1 = require("../jwt/jwtservice.service");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthController = class AuthController {
    constructor(service, jwt, prisma) {
        this.service = service;
        this.jwt = jwt;
        this.prisma = prisma;
    }
    Login() { }
    redirect(req, res) {
        const accessToken = this.jwt.sign(req.user);
        res.cookie('cookie', accessToken).status(200);
        res.send('cookie well setted');
        return (req);
    }
    getSessionToken(req) {
        const sessionToken = this.jwt.verify(req.cookies['cookie']);
        return `Session Token: ${sessionToken}`;
    }
    async GenerateQrCode(req) {
        const qrCodeDataURL = await this.service.GenerateQrCode(req);
        return qrCodeDataURL;
    }
    async Verify_QrCode(body, req) {
        const msg = await this.service.Verify_QrCode(body, req);
        return (msg.msg);
    }
    async Insert_Friends(body, req) {
        const user = await this.prisma.user.update({
            where: { id_user: 98853 },
            data: {
                freind: {
                    create: {
                        name: body.friend,
                        id_freind: 90240,
                    },
                },
            },
        });
    }
    async Get_FriendsList(req) {
        const decoded = this.jwt.verify(req.cookies['cookie']);
        const user = await this.prisma.user.findUnique({ where: { id_user: decoded.id }, });
        const friends = await this.prisma.user.findUnique({
            where: { id_user: decoded.id },
            include: {
                freind: {
                    select: { id_freind: true },
                }
            }
        });
        const obj = friends.freind;
        let FriendList = {};
        const idFriends = obj.map((scope => scope.id_freind));
        for (const num of idFriends) {
            const OneFriend = await this.prisma.user.findUnique({
                where: { id_user: num },
            });
            const name = OneFriend.name;
            FriendList = { name: OneFriend };
        }
        const WantedObj = { AccountOwner: user, FriendList };
        console.log(WantedObj);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Get)('login/42'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('42')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "Login", null);
__decorate([
    (0, common_1.Get)('login/42/redirect'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('42')),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "redirect", null);
__decorate([
    (0, common_1.Get)('get-session-token'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getSessionToken", null);
__decorate([
    (0, common_1.Get)('get-qrcode'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "GenerateQrCode", null);
__decorate([
    (0, common_1.Post)('verify-qrcode'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "Verify_QrCode", null);
__decorate([
    (0, common_1.Post)('add-friends'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "Insert_Friends", null);
__decorate([
    (0, common_1.Get)('get-friendsList'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "Get_FriendsList", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        jwtservice_service_1.JwtService,
        prisma_service_1.PrismaService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map