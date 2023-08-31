import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from 'src/dto/CreateMessage.dto';
import { UpdateMessageDto } from 'src/dto/UpdateMessage.dto';
import { MessagesRepository } from './messages.repository';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesRepository: MessagesRepository) {}

  @Get('')
  async getAllMessages() {
    return this.messagesRepository.findAll();
  }

  @Get('reservation/:id')
  async getMessagesByReservation(@Param('id') id: string) {
    return this.messagesRepository.findMessageByReservation(id);
  }

  @Post('create')
  async createMessage(@Body() createMessageDto: CreateMessageDto) {
    return this.messagesRepository.create(createMessageDto);
  }

  @Post(':id/update')
  async updateMessage(
    @Param('id') id: string,
    @Body() updateMessageDto: UpdateMessageDto,
  ) {
    return this.messagesRepository.updateMessage(id, updateMessageDto);
  }

  @Post(':id/delete')
  async deleteMessage(@Param('id') id: string) {
    return this.messagesRepository.deleteMessgae(id);
  }
}
