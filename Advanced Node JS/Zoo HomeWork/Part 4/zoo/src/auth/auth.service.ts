import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginResponseDto, UserRegisterDto } from './dtos/auth.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { SALT_ROUNDS } from './auth.const';
import { UserLoginDto } from './dtos/auth.dto';
import { UserResponseDto } from './dtos/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(data: UserRegisterDto) {
    const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);

    const userRespone = await this.userService.createUser({
      ...data,
      password: hashedPassword,
    });

    return userRespone;
  }

  async login(credentials: UserLoginDto): Promise<LoginResponseDto> {
    const user = await this.validateUser(
      credentials.username,
      credentials.password,
    );

    const accessToken = this.jwtService.sign({
      role: user.role,
      id: user.role,
      name: user.name,
      username: user.username,
    });

    return {
      user,
      accessToken,
    };
  }

  async validateUser(
    username: string,
    password: string,
  ): Promise<UserResponseDto> {
    const user = await this.userService.getUserByUsername(username);

    const passwordValidation = await bcrypt.compare(password, user.password);

    if (!passwordValidation) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }
}
