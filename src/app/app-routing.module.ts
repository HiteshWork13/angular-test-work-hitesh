import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartDashbaordComponent } from './chart-dashbaord/chart-dashbaord.component';
import { ParentChildComponent } from './parent-child/parent-child.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: ChartDashbaordComponent
  },
  {
    path: 'parent',
    component: ParentChildComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
