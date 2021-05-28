import { Component, OnInit, Input } from '@angular/core';
import { djbInfo } from '../djbInfo';

import { ActivatedRoute } from '_@angular_router@12.0.1@@angular/router';
import { Location } from '_@angular_common@12.0.1@@angular/common';
import { DjbService } from '../djb.service';


@Component({
  selector: 'app-fast-djb-info',
  templateUrl: './fast-djb-info.component.html',
  styleUrls: ['./fast-djb-info.component.css']
})

export class FastDjbInfoComponent implements OnInit {
  @Input() djb?: djbInfo;

  constructor(
    private router: ActivatedRoute,
    private djbsService: DjbService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getDjb();
  }

  getDjb(): void{
    const day = +(this.router.snapshot.paramMap.get('id') || 0);
    this.djbsService.getDjb(day)
      .subscribe( djb => {
        this.djb = djb;
        console.log(djb);
      });
  }

  goBack(): void{
    this.location.back();
  }
}
