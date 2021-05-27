import { Injectable } from '@angular/core';

import { djbInfo } from './djbInfo';
import { djbs } from './moce-djb';
import { MessageService } from './message.service';

import { Observable, of } from '_rxjs@6.6.7@rxjs';

@Injectable({
  providedIn: 'root'
})
export class DjbService {

  constructor(private messageService: MessageService) { }

  getDjbs(): Observable<djbInfo[]>{
    this.messageService.add('生日信息获取！');
    return of(djbs);
  }
}
