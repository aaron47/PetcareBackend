import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMessageDto } from 'src/dto/CreateMessage.dto';
import { UpdateMessageDto } from 'src/dto/UpdateMessage.dto';
import { MessageDocument } from 'src/entities/message.schema';

@Injectable()
export class MessagesRepository {
  constructor(
    @InjectModel(MessageDocument.name)
    private readonly messageModel: Model<MessageDocument>,
  ) {}

  async create(createMessageDto: CreateMessageDto) {
    const message = new this.messageModel(createMessageDto);
    return message.save();
  }

  async findAll() {
    return this.messageModel.find().exec();
  }

  async findMessageByReservation(reservationId: string) {
    return this.messageModel.find({ reservationId }).exec();
  }

  async updateMessage(messageId: string, updateMessageDto: UpdateMessageDto) {
    return this.messageModel.findByIdAndUpdate(
      messageId,
      { ...updateMessageDto },
      { new: true },
    );
  }

  async deleteMessgae(messageId: string) {
    return this.messageModel.findByIdAndDelete(messageId);
  }
}
