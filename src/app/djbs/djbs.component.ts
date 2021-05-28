import { Component, OnInit } from '@angular/core';

import { djbInfo } from '../djbInfo';
import { DjbService } from '../djb.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-djbs',
  templateUrl: './djbs.component.html',
  styleUrls: ['./djbs.component.css'] ,
})

export class DjbsComponent implements OnInit {

  djbs?: djbInfo[];

  djbt: djbInfo= {
    day : 123,
    name: '兽耳娘',
    someTip: 'asd',
  }

  constructor(private djbService: DjbService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getDjbs();
  }

  getDjbs(): void{
    this.djbService.getDjbs()
      .subscribe(djbs => this.djbs = djbs);
  }
}
