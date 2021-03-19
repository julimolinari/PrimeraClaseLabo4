import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeraClase2';
  public edad1:number=0;
  public edad2:number=0;
  public promedio:number=0;
  public mostrar:boolean =false;

  public calcularPromedio(): void {
    this.promedio = (this.edad1 + this.edad2) /2;
    this.mostrar=true;
  }

  public Limpiar() : void{
    this.edad1 = 0;
    this.edad2 = 0; 
    this.mostrar = false;

  }
}
