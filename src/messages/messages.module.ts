import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageDocument, MessageSchema } from 'src/entities/message.schema';
import { MessagesRepository } from './messages.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MessageDocument.name, schema: MessageSchema },
    ]),
  ],
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepository],
})
export class MessagesModule {}
