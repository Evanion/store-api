import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // We don't need to show this endpoint in the API documentation
  @ApiExcludeEndpoint()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiTags('infrastructure')
  @Get('ping')
  ping(): string {
    return 'pong';
  }
}
