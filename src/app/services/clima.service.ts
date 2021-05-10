import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  // https://openweathermap.org/current#name

  private key: string = 'c798cb387dd5481aaa33cda65e74323e';
  private url: string = 'https://api.openweathermap.org/data/2.5/weather?appid=';

  constructor(private http: HttpClient) { }

  getClima(city: string): Observable<any> {
    const url = `${this.url}${this.key}&q=${city}`;
    return this.http.get(url);
  }
}
