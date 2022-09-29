import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

// Imported syncfusion Grid module from grids package
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { AccumulationChartModule, ChartModule } from '@syncfusion/ej2-angular-charts';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
// import { SidebarModule } from 'primeng/sidebar';

import {
  BarSeriesService, StackingBarSeriesService,
  LineSeriesService, DateTimeService, StepLineSeriesService, DataLabelService, StackingColumnSeriesService, CategoryService,
  StepAreaSeriesService, SplineSeriesService, ScrollBarService, ChartAnnotationService, LegendService, TooltipService, StripLineService,
  SelectionService, ScatterSeriesService, ZoomService, ColumnSeriesService, AreaSeriesService, RangeAreaSeriesService
} from '@syncfusion/ej2-angular-charts';

import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons';


//ngx charts module
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GridModule,
    ChartModule,
    AccumulationChartModule,
    CardModule,
    ButtonModule,
    SidebarModule,
    RadioButtonModule,
    NgxChartsModule
  ],
  providers: [BarSeriesService, StackingBarSeriesService, LineSeriesService, StepLineSeriesService, DateTimeService, DataLabelService, StackingColumnSeriesService, CategoryService,
    StepAreaSeriesService, SplineSeriesService, ScrollBarService, ChartAnnotationService, LegendService, TooltipService, StripLineService,
    SelectionService, ScatterSeriesService, ZoomService, ColumnSeriesService, AreaSeriesService, RangeAreaSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
