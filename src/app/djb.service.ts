import { Injectable } from '@angular/core';

import { djbInfo } from './djbInfo';
import { djbs } from './moce-djb';
import { MessageService } from './message.service';

import { Observable, of } from '_rxjs@6.6.7@rxjs';
import { HttpClient, HttpHeaders } from '_@angular_common@12.0.1@@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class DjbService {
  private djbsUrl = '';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getDjbs(): Observable<djbInfo[]>{
    this.log('生日信息获取！');
    return of(djbs);
  }

  getDjb(day : number): Observable<djbInfo | undefined>{
    this.log(`查找信息关于: day=${day}`);
    return of(djbs.find(djb => djb.day === day));
  }

  private log(message: String) {
    this.messageService.add(`djb service: ${message}`);
  }
}
