import { ClimaService } from './../../services/clima.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  img: string = '../../../assets/clima.jpg';
  ciudad: string = '';
  temperatura: number = 0;
  Tmaxima: number = 0;
  Tminima: number = 0;
  humedad: number = 0;
  clima: string = '';
  query: boolean = false;
  loading: boolean = false;
  mostrarError: boolean = false;

  constructor(private _climaService: ClimaService) { }

  ngOnInit(): void {
  }

  obtenerClima() {
    this.query = false;
    this.loading = true;

    this._climaService.getClima(this.ciudad).subscribe(data => {
      this.loading = false;
      this.query = true;
      this.temperatura = data.main.temp - 273
      this.Tmaxima = data.main.temp_max - 273
      this.Tminima = data.main.temp_min - 273
      this.humedad = data.main.humidity
      this.clima = data.weather[0].main
      this.ciudad = data.name
    }, error => {
      console.log(error);
      this.loading = false;
      this.error();
    })
  }

  error() {
    this.mostrarError = true;
    setTimeout(() => {
      this.mostrarError = false;
      this.ciudad = '';
    }, 3000);
  }



}
