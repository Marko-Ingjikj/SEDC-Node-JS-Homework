import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
  Post,
  Body,
  Put,
  Param,
  UseGuards,
  Patch,
  Delete,
} from '@nestjs/common';
import {
  ApiTags,
  ApiResponse,
  ApiNotFoundResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { ZookeeperService } from './zookeeper.service';
import { JwtAuthGuard } from 'src/auth/guards/roles.guard';

import { ZookeeperCreateDto, ZookeeperResponseDto } from './dtos/zookeeper.dto';
import { ZookeeperQueryDto } from './dtos/zookeeper-query.dto';
import { Roles } from 'src/auth/decorators/get-user.decorator';
import { RolesEnum } from 'src/auth/roles.enum';

@ApiTags('Zookeepers')
@Controller('zookeeper')
export class ZookeeperController {
  constructor(private readonly zookeeperService: ZookeeperService) {}

  @Get()
  getZookeepers(
    @Query() query: ZookeeperQueryDto,
  ): Promise<ZookeeperResponseDto[]> {
    return this.zookeeperService.getZookeepers(query);
  }

  @ApiBearerAuth()
  @Roles(RolesEnum.admin)
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Post()
  createZookeeper(
    @Body() body: ZookeeperCreateDto,
  ): Promise<ZookeeperResponseDto> {
    return this.zookeeperService.createZookeeper(body);
  }

  @ApiBearerAuth()
  @Roles(RolesEnum.admin)
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  updateZookeeper(
    @Param('id') id: string,
    @Body() body: ZookeeperCreateDto,
  ): Promise<ZookeeperResponseDto> {
    return this.zookeeperService.updateZookeeper(id, body);
  }

  @ApiBearerAuth()
  @Roles(RolesEnum.admin)
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteZookeeper(@Param('id') id: string) {
    return this.zookeeperService.deleteZookeper(id);
  }
}
