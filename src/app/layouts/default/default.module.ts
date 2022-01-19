import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MockapiService } from 'src/app/modules/mockapi.service';
import { FetchWeatherService } from 'src/app/shared/fetch-weather.service';
import { DashboardWaterComponent } from '../../modules/dashboard-water/dashboard-water.component';
import { DashboardAirComponent } from '../../modules/dashboard-air/dashboard-air.component';

@NgModule({
  declarations: [DefaultComponent, DashboardComponent, PostsComponent, DashboardWaterComponent, DashboardAirComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [DashboardService, MockapiService, FetchWeatherService],
})
export class DefaultModule {}
