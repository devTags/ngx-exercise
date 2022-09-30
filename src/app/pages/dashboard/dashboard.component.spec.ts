import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { DashboardComponent } from './dashboard.component'
import { DataService } from 'src/app/services/data.service'
import { of } from 'rxjs'
import { UnemploymentInfo } from 'src/app/interfaces/unemployment-info'
import { SaleInfo } from 'src/app/interfaces/sale-info'
import { WorldPopulation } from 'src/app/interfaces/world-population'

describe('DashboardComponent', () => {
  let component: DashboardComponent
  let fixture: ComponentFixture<DashboardComponent>

  let sampleUnemployedData: UnemploymentInfo[] = [
    {
      countryId: '108ddbf6-b2e4-4305-aad8-149b0050ad2e',
      countryName: 'Singapore           ',
      recordedYear: '2022-06-20',
      unemploymentRate: 2.1
    }
  ]

  let sampleSaleData: SaleInfo[] = [
    {
      saleDate: 2010,
      saleId: '03818a92-df72-4bd5-abfc-e2d249aba250',
      saleRate: 7.2
    }
  ]

  let sampleWorldPopulationData: WorldPopulation[] = [
    {
      countryId: '34e77a4a-9c18-4d9c-89f8-fa3863ea63e7',
      countryName: 'Philippines',
      countryPopulation: 110000000
    }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ DataService ],
      declarations: [DashboardComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(DashboardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should return true if successfully called getAllUnemploymentData', () => {
    const service = fixture.debugElement.injector.get(DataService)

    spyOn(service, 'getAllUnemploymentData').and.returnValue(
      of(sampleUnemployedData)
    )

    expect(component.getAllUnemployed()).toBeTruthy()
  })

  it('should return true if successfully called getAllSales', () => {
    const service = fixture.debugElement.injector.get(DataService)

    spyOn(service, 'getAllSales').and.returnValue(of(sampleSaleData))

    expect(Object.keys(component.getSales()).length).toBeTruthy()
  })

  it('should return true if successfully called getWorldPopulation', () => {
    const service = fixture.debugElement.injector.get(DataService)

    spyOn(service, 'getWorldPopulation').and.returnValue(
      of(sampleWorldPopulationData)
    )

    expect(component.getPopulation()).toBeTruthy()
  })

})
