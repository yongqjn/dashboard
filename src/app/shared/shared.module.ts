import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideComponent } from './components/side/side.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LinechartComponent } from './widgets/linechart/linechart.component';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { BarchartComponent } from './widgets/barchart/barchart.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { WeatherWidgetComponent } from './widgets/weather-widget/weather-widget.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    LinechartComponent,
    BarchartComponent,
    WeatherWidgetComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    BrowserAnimationsModule,
    ChartsModule,
    WavesModule,
    MDBBootstrapModule.forRoot(),
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSlideToggleModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    LinechartComponent,
    HttpClientModule,
    BarchartComponent,
    WeatherWidgetComponent
  ],
})
export class SharedModule {}
