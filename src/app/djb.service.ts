import { Injectable } from '@angular/core';

import { djbInfo } from './djbInfo';
import { djbs } from './moce-djb';
import { MessageService } from './message.service';

import { Observable, of } from '_rxjs@6.6.7@rxjs';
import { catchError, map, tap} from 'rxjs/operators';
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
    // return of(djbs);
    return this.http.get<djbInfo[]>(this.djbsUrl)
      .pipe(
        catchError(this.handleError('getDjbs', []))
      );
  }

  getDjb(day : number): Observable<djbInfo | undefined>{
    
    // return of(djbs.find(djb => djb.day === day));
    const url = `${this.djbsUrl}/${day}`
    return this.http.get<djbInfo>(url)
      .pipe(
        tap(_=>{this.log(`查找信息关于: day=${day}`)}),
        // bug: 类型不匹配
        catchError(this.handleError<djbInfo>(`getDjb day=${day}`, {}))
      )
  }

  private log(message: String) {
    this.messageService.add(`djb service: ${message}`);
  }

  private handleError<T>(operation = 'operation', result: T){
    return (err: any): Observable<T> =>{
      console.error(err);

      this.log(`${operation} failed: ${err.message}`);
      return of (result as T);
    }
  }
}
