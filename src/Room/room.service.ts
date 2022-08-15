import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomService {
  constructor(private readonly prisma:PrismaService){}

  create(dto:CreateRoomDto) {
    const data: Prisma.RoomCreateInput = {
      number:dto.number,
      maxCards:dto.maxCards,
      limitPrizeDraw:dto.limitPrizeDraw,
      limitRecord:dto.limitRecord,
      limitUsers:dto.limitUsers,
      price:dto.price,
      historic:dto.historic, 
      frequency:dto.frequency
    }   
    
    return this.prisma.room.create({data})//.catch(handleError);
  }

  findAll() {
    return `This action returns all folderName`;
  }

  findOne(id: number) {
    return `This action returns a #${id} folderName`;
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return `This action updates a #${id} folderName`;
  }

  remove(id: number) {
    return `This action removes a #${id} folderName`;
  }
}