import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { CurrentUser, CurrentUserDto, JwtAuthGaurd } from '@app/common';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  @UseGuards(JwtAuthGaurd)
  async create(
    @Body() createReservationDto: CreateReservationDto,
    @CurrentUser() user: CurrentUserDto,
  ) {
    return this.reservationsService.create(createReservationDto, user);
  }

  @Get()
  @UseGuards(JwtAuthGaurd)
  async findAll() {
    console.log('Show the result. Now Got the all rese..................');
    return this.reservationsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGaurd)
  async findOne(@Param('id') id: string) {
    return this.reservationsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGaurd)
  async update(
    @Param('id') id: string,
    @Body() updateReservationDto: UpdateReservationDto,
  ) {
    return this.reservationsService.update(id, updateReservationDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGaurd)
  async remove(@Param('id') id: string) {
    return this.reservationsService.remove(id);
  }
}
