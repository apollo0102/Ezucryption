import { Controller, Get, Redirect, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getBlank() {
    return { message: 'App Running' };
  }
}
