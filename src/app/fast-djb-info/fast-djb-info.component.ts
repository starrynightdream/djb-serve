import { Component, OnInit, Input } from '@angular/core';
import { djbInfo } from '../djbInfo';

@Component({
  selector: 'app-fast-djb-info',
  templateUrl: './fast-djb-info.component.html',
  styleUrls: ['./fast-djb-info.component.css']
})

export class FastDjbInfoComponent implements OnInit {
  @Input() djb?: djbInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
