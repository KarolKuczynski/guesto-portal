import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from 'src/app/shared/services/base.api.service';
import { CreateRoom } from '../components/rooms/models/create.room.model';

@Injectable()
export class RoomApiService extends BaseApiService {
  private baseUrl: string = '/api/rooms';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  addRoom(newRoom: CreateRoom) {
    return this.post(this.baseUrl, newRoom);
  }
}
