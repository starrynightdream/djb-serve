import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DjbsComponent } from './djbs/djbs.component';
import { ChardetailComponent } from './chardetail/chardetail.component';
import { FastDjbInfoComponent } from './fast-djb-info/fast-djb-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/djbs', pathMatch: 'full'},
  { path: 'djbs', component: DjbsComponent},
  { path: 'charDetail', component: ChardetailComponent},
  { path: 'detail/:id', component: FastDjbInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
