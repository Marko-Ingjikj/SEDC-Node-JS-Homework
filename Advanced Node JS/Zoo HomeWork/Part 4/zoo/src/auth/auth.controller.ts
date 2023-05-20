import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import {
  LoginResponseDto,
  UserLoginDto,
  UserRegisterDto,
} from './dtos/auth.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @UsePipes(ValidationPipe)
  register(@Body() body: UserRegisterDto): Promise<UserRegisterDto> {
    return this.authService.register(body);
  }

  @Post('login')
  login(@Body() body: UserLoginDto): Promise<LoginResponseDto> {
    return this.authService.login(body);
  }
}
