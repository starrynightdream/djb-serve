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

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

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
        catchError(this.handleError<djbInfo>(`getDjb day=${day}`))
      )
  }

  addDjb(djb: djbInfo): Observable<djbInfo>{

    return this.http.post<djbInfo>(this.djbsUrl, djb, this.httpOptions)
      .pipe(
        tap((newDjb)=>{this.log(`add one day = ${newDjb.day}`)}),
        catchError(this.handleError<djbInfo>('add djb'))
      );
  }

  deleteDjb(day: number): Observable<djbInfo>{
    const url = `${this.djbsUrl}/${day}`;

    return this.http.delete<djbInfo>(url, this.httpOptions)
      .pipe(
        tap(_=> this.log(`delete djb day=${day}`)),
        catchError(this.handleError<djbInfo>('delete djb'))
      )
  }

  updateDjb(djb: djbInfo): Observable<any>{
    return this.http.put(this.djbsUrl, djb, this.httpOptions)
      .pipe(
        tap(_=>this.log(`updated hero id = ${djb.day}`)),
        catchError(this.handleError<any>('updateDjb'))
      )
  }

  searchDjb(char: string): Observable<djbInfo[]>{
    const url = `${this.djbsUrl}/${char}`
    return this.http.get<djbInfo[]>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<djbInfo[]>(`search`))
      )
  }

  private log(message: String) {
    this.messageService.add(`djb service: ${message}`);
  }

  private handleError<T>(operation = 'operation', result: T|null = null){
    return (err: any): Observable<T> =>{
      console.error(err);

      this.log(`${operation} failed: ${err.message}`);
      return of (result as T);
    }
  }
}
