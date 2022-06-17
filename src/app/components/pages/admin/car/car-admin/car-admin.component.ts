import { Car } from './../../../../../models/car';
import { CarService } from './../../../../../services/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-admin',
  templateUrl: './car-admin.component.html',
  styleUrls: ['./car-admin.component.css']
})
export class CarAdminComponent implements OnInit {

  constructor(private carService:CarService) { }
  cars:Car[];
  carName:Car;

  ngOnInit(): void {
    this.getCar();
  }

  getCar(){
    this.carService.getCar().subscribe(data=>{
      this.cars = data ;
    })
  }

  deleteCar(selectedId: number) {

    if (confirm("Silmek istediğinize emin misiniz?")) {

      this.carService.deleteCar(selectedId).subscribe(data=>{
        this.carName = data
        alert("Başarıyla silindi.")
      })
      location.reload();
    }


  }

}
