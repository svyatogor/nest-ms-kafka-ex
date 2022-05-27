import { NestFactory } from '@nestjs/core';
import { KafkaOptions, Transport } from '@nestjs/microservices';
import { ServerModule } from './server.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<KafkaOptions>(ServerModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'consumer',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'example',
      },
    },
  });
  await app.listen();
}
bootstrap();
