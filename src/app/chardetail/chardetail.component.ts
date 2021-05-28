import { Component, OnInit } from '@angular/core';

import { djbInfo } from '../djbInfo';
import { DjbService } from '../djb.service';

@Component({
  selector: 'app-chardetail',
  templateUrl: './chardetail.component.html',
  styleUrls: ['./chardetail.component.css']
})
export class ChardetailComponent implements OnInit {
  djbs : djbInfo[] = [];

  constructor(private djbService: DjbService) { }

  ngOnInit(): void {
    this.getDjbs()
  }

  getDjbs(): void{
    this.djbService.getDjbs()
      .subscribe(djbs=>this.djbs = djbs);
  }

}
