import { Component, OnInit } from '@angular/core';
import {djbInfo} from '../djbInfo';
import { djbs } from '../moce-djb';

@Component({
  selector: 'app-djbs',
  templateUrl: './djbs.component.html',
  styleUrls: ['./djbs.component.css'] ,
})

export class DjbsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedDjb?: djbInfo;

  onSelect(djb: djbInfo): void{
    this.selectedDjb = djb;
  }


  djbt: djbInfo= {
    day : 123,
    name: '兽耳娘',
    someTip: 'asd',
  }

  djbs = djbs;

}
