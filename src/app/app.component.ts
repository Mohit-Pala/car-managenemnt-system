import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarDbService, handleListCarByID } from './services/car-db.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  carService = inject(CarDbService)

  title = 'dataconnect';
  id = '11111111222233334444555555555555'
  car_make = ''
  car_color =''
  


  resolvePromise() {
    console.log(handleListCarByID(this.id))
  }
} 
