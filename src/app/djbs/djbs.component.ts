import { Component, OnInit } from '@angular/core';

import { djbInfo } from '../djbInfo';
import { DjbService } from '../djb.service';
import { MessageService } from '../message.service';

import { Observable, Subject } from '_rxjs@6.6.7@rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from '_rxjs@6.6.7@rxjs/operators';

@Component({
  selector: 'app-djbs',
  templateUrl: './djbs.component.html',
  styleUrls: ['./djbs.component.css'] ,
})

export class DjbsComponent implements OnInit {

  djbs?: djbInfo[];
  djbs$!: Observable<djbInfo[]>;

  url?:string;

  private searchTerms = new Subject<string>();

  djbt: djbInfo= {
    day : 123,
    name: '兽耳娘',
    someTip: 'asd',
  }

  constructor(private djbService: DjbService, private messageService: MessageService) { 
    const url = djbService.getUrl();
    this.url = `${url}/imgSet/bg.jpg`;
  }

  ngOnInit(): void {
    this.getDjbs();
  }

  getDjbs(): void{
    this.djbService.getDjbs()
      .subscribe(djbs => this.djbs = djbs);
  }

  search(term: string): void{
    this.searchTerms.next(term);

    this.djbs$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string)=> this.djbService.searchDjb(term))
    );
  }
}
