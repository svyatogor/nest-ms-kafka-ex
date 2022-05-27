import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ServerService } from './server.service';

@Controller()
export class ServerController {
  constructor(private readonly serverService: ServerService) {}

  @MessagePattern('hello')
  getHello(): string {
    console.log('Hello World from the Client!');
    throw new Error('Ouch!');
  }
}
