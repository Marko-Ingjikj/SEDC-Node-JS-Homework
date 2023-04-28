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
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { ZookeeperService } from './zookeeper.service';
import { ZookeeperQueryDto } from './dtos/zookeeper-query.dto';
import {
  ZookeeperResponseDto,
  ZookeeperCreateDto,
  ZookeeperUpdateDto,
} from './dtos/zookeeper.dto';

@ApiTags('Zookeepers')
@Controller('zookeeper')
export class ZookeeperController {
  constructor(private readonly zookeeperService: ZookeeperService) {}

  @Get()
  @UsePipes(ValidationPipe)
  @ApiResponse({
    status: 200,
    description: 'Employed Zookeepers',
  })
  getZookeepers(
    @Query() query: ZookeeperQueryDto,
  ): Promise<ZookeeperResponseDto[]> {
    return this.zookeeperService.getZookeepers(query);
  }

  @Post()
  @UsePipes(ValidationPipe)
  @ApiResponse({
    status: 200,
    description: 'New Zookeeper',
  })
  createZookeeper(
    @Body() zookeeper: ZookeeperCreateDto,
  ): Promise<ZookeeperResponseDto> {
    return this.zookeeperService.createZookeeper(zookeeper);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  @ApiResponse({
    status: 200,
    description: 'Edited Zookeeper',
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Cannot find zookeeper',
  })
  updateZookeeper(
    @Param('id') id: string,
    @Body() updateData: ZookeeperUpdateDto,
  ): Promise<ZookeeperResponseDto> {
    return this.zookeeperService.updateZookeeper(id, updateData);
  }
}
