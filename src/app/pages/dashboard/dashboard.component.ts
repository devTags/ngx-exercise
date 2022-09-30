import { Component, OnInit } from '@angular/core'
import { SaleInfo } from 'src/app/interfaces/sale-info'
import { WorldPopulation } from 'src/app/interfaces/world-population'
import { UnemploymentInfo } from '../../interfaces/unemployment-info'
import { DataService } from '../../services/data.service'
import { Color, ScaleType } from '@swimlane/ngx-charts'
import { ngxChartData } from 'src/app/interfaces/ngx-data'
import { DateTime } from '@syncfusion/ej2-angular-charts'
import { firstValueFrom } from 'rxjs'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public chartData: UnemploymentInfo[] = []
  public chartData1: SaleInfo[] = []
  public ngxChartData: ngxChartData[] = []
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
  legendSettings = {
    mode: 'Range'
  }
  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  }

  //Primeng Chart
  data: any
  basicOptions: any
  horizontalOptions: {
    indexAxis: string
    plugins: { legend: { labels: { color: string } } }
    scales: {
      x: { ticks: { color: string }; grid: { color: string } }
      y: { ticks: { color: string }; grid: { color: string } }
    }
  }

  constructor (private ds: DataService) {
    this.horizontalOptions = {
      indexAxis: 'y',
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    }

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: 'rgba(255,255,255,0.2)'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: 'rgba(255,255,255,0.2)'
          }
        }
      }
    }
  }

  ngOnInit (): void {
    this.getSales()
    this.getAllUnemployed()
    this.getPopulation()
  }

  async getAllUnemployed (): Promise<void> {
    await firstValueFrom(this.ds.getAllUnemploymentData()).then(
      (res: UnemploymentInfo[]) => {
        let country,
          value = [{}]
        country = res.map(value => String(value['countryName']))
        value = res.map(value => Number(value['unemploymentRate']))

        this.data = {
          title: this.title1,
          labels: country,
          datasets: [
            {
              label: this.title1,
              backgroundColor: [
                '#9370DB',
                '#87CEFA',
                '#FA8072',
                '#FF7F50',
                '#90EE90',
                '#9370DB'
              ],
              data: value,
              borderColor: '#FFA726',
              tension: 0.4,
              marker: true
            }
          ]
        }
        this.chartData = res
      }
    )
    this.primaryXAxis = {
      valueType: 'Category'
    }
    this.marker = { visible: true, dataLabel: { visible: true } }
  }

  async getSales (): Promise<void> {
    await firstValueFrom(this.ds.getAllSales()).then((res: SaleInfo[]) => {
      this.chartData1 = res.map(value => ({
        saleId: value.saleId,
        saleDate: Number(value.saleDate),
        saleRate: value['saleRate']
      }))

      this.primaryXAxis1 = {
        title: 'Year',
        minimum: 2010,
        maximum: new Date().getFullYear() - 1,
        interval: 1,
        edgeLabelPlacement: 'Shift'
      }
      this.primaryYAxis1 = {
        minimum: 0,
        maximum: 16,
        interval: 2,
        title: 'Sales Amount in Millions'
      }
    })
  }

  async getPopulation (): Promise<void> {
    await firstValueFrom(this.ds.getWorldPopulation()).then(
      (res: WorldPopulation[]) => {
        this.ngxChartData = res.map(value => ({
          name: value['countryName'],
          value: Number(value['countryPopulation'])
        }))
      }
    )
  }

}
