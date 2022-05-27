import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Controller()
export class AppController implements OnModuleInit {
  constructor(@Inject('CLIENT') private client: ClientKafka) {}
  onModuleInit() {
    this.client.subscribeToResponseOf('hello');
  }

  @Get()
  async getHello(): Promise<string> {
    await this.client.send('hello', 'Hello World!').toPromise();
    return 'ok';
  }
}
