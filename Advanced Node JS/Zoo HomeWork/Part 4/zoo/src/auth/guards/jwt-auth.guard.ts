import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    const request = context.switchToHttp().getRequest();

    const authTokenValue = request.headers?.authorization?.split(' ')[1];

    const userInToken = this.jwtService.decode(authTokenValue);

    if (!userInToken) {
      return false;
    }

    request.user = userInToken;

    return roles.includes(userInToken['role']);
  }
}
