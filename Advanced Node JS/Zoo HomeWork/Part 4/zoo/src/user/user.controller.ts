import { Controller, Param, Patch, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/roles.guard';
import { UserRolesParamsDto } from './dtos/user-roles-param.dto';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id/role/:role')
  updateUserRole(@Param() { id, role }: UserRolesParamsDto) {
    return this.userService.updateUserRole(id, role);
  }
}
