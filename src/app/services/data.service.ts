import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SaleInfo } from '../interfaces/sale-info';
import { UnemploymentInfo } from '../interfaces/unemployment-info';
import { WorldPopulation } from '../interfaces/world-population';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseAspUrl = 'https://localhost:7264/api/'

  constructor(private http: HttpClient) { }

  getAllUnemploymentData(): Observable<UnemploymentInfo[]> {
    return this.http.get<UnemploymentInfo[]>(`${this.baseAspUrl}UnemploymentInfos/GetAllUnemploymentRate`)
  }

  getAllSales(): Observable<SaleInfo[]> {
    return this.http.get<SaleInfo[]>(`${this.baseAspUrl}SalesInfos/GetAllSales`)
  }

  getWorldPopulation(): Observable<WorldPopulation[]> {
    return this.http.get<WorldPopulation[]>(`${this.baseAspUrl}WorldPopulation/GetAllPopulation`)
  }
}
