import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardAirComponent } from './modules/dashboard-air/dashboard-air.component';
import { DashboardWaterComponent } from './modules/dashboard-water/dashboard-water.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path:'water',
        component : DashboardWaterComponent
      },
      {
        path : 'air',
        component : DashboardAirComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
