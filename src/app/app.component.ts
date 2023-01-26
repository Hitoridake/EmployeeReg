import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public empleados?: Empleado[];

  constructor(http: HttpClient) {
    http.get<Empleado[]>('/EmployeeReg').subscribe(result => {
      this.empleados = result;
    }, error => console.error(error));
  }

  title = 'EmployeeReg';
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

interface Empleado {
  Cedula: number;
  Nombres: string;
  Apellidos: string;
  FechaNacimiento: Date;
  Cargo: string;
  Email: string;
}
