import { Component, OnInit } from '@angular/core'
import { SaleInfo } from 'src/app/interfaces/sale-info'
import { WorldPopulation } from 'src/app/interfaces/world-population'
import { UnemploymentInfo } from '../../interfaces/unemployment-info'
import { DataService } from '../../services/data.service'
import { Color, ScaleType } from '@swimlane/ngx-charts'
import { ngxChartData } from 'src/app/interfaces/ngx-data'
import {
  SaleInfoData,
  UnemploymentInfoData,
  WorldPopulationData
} from 'src/app/interfaces/sample-data'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public chartData: UnemploymentInfo[] = UnemploymentInfoData
  public chartData1: SaleInfo[] = SaleInfoData
  public ngxChartData: ngxChartData[] = WorldPopulationData

  public primaryXAxis!: Object
  public primaryYAxis!: Object

  public primaryXAxis1!: Object
  public primaryYAxis1!: Object
  public marker!: Object

  title1 = 'Unemployment Rate of some country in Asia (%)'
  title2 = 'CO2 Analysis Rate'
  title3 = 'Inflation Increase (%) in Philippines by Year'

  // options
  showXAxis: boolean = true
  showYAxis: boolean = true
  gradient: boolean = false
  showLegend: boolean = true
  showXAxisLabel: boolean = true
  yAxisLabel: string = 'Country'
  showYAxisLabel: boolean = true
  xAxisLabel: string = 'Population'
  view: Object[] = [700, 400, 300]

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  }

  constructor (private ds: DataService) {}

  ngOnInit (): void {
    this.primaryXAxis = {
      valueType: 'Category'
    }
    this.marker = { visible: true }
    // this.getSales()
    // this.getAllUnemployed()
    // this.getPopulation()
  }

  // getAllUnemployed (): void {
  //   this.ds.getAllUnemploymentData().subscribe((res: UnemploymentInfo[]) => {
  //     this.chartData = res
  //   })
  //   this.primaryXAxis = {
  //     valueType: 'Category'
  //   }
  //   this.marker = { visible: true }
  // }

  // getSales (): void {
  //   this.ds.getAllSales().subscribe((res: SaleInfo[]) => {
  //     this.chartData1 = res
  //     this.primaryXAxis1 = {
  //       title: 'Year',
  //       minimum: 2010,
  //       maximum: new Date().getFullYear() - 1,
  //       interval: 1,
  //       edgeLabelPlacement: 'Shift'
  //     }
  //     this.primaryYAxis1 = {
  //       minimum: 0,
  //       maximum: 16,
  //       interval: 2,
  //       title: 'Sales Amount in Millions'
  //     }
  //   })
  // }

  // getPopulation (): void {
  //   this.ds.getWorldPopulation().subscribe((res: WorldPopulation[]) => {
  //     this.ngxChartData = res.map(value => ({
  //       name: value['countryName'],
  //       value: Number(value['countryPopulation'])
  //     }))
  //   })
  // }

  onSelect (event: any): void {
    console.log(event)
  }
}
