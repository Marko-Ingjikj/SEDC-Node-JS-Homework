import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { RolesEnum } from '../roles.enum';

export class UserLoginDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    type: String,
    required: true,
    description: 'Users email',
    example: 'name@gmail.com',
  })
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty({
    type: String,
    required: true,
    description: 'Users password',
    example: 'abc123',
  })
  password: string;
}

export class UserRegisterDto extends UserLoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: 'Users name',
    example: 'John Doe',
  })
  name: string;
}

export class UserResponseDto extends UserRegisterDto {
  @ApiProperty({
    type: String,
    description: 'Users id',
  })
  id: string;

  @ApiProperty({
    type: 'enum',
    enum: RolesEnum,
    default: RolesEnum.user,
  })
  role: RolesEnum;

  @ApiProperty({
    type: Date,
  })
  createdAt!: Date;

  @ApiProperty({
    type: Date,
  })
  updatedAt!: Date;

  @ApiProperty({
    type: Date,
  })
  deletedAt?: Date;
}

export class LoginResponseDto {
  @ApiProperty({
    type: UserResponseDto,
  })
  user: UserResponseDto;

  @ApiProperty({
    type: String,
    description: 'The access Bearer token',
  })
  accessToken: string;
}
