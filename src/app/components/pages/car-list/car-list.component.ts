import { ActivatedRoute } from '@angular/router';
import { Car } from './../../../models/car';
import { CarService } from './../../../services/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  constructor(private carService: CarService, private activatedRoute:ActivatedRoute) { }
  cars: Car[];

  ngOnInit(): void {
  this.getCarInfo()
  }


  getCarInfo(){
    this.carService.getCar().subscribe(data=>{
      this.activatedRoute.params.subscribe(param=>{
        if(param["id"]){
          this.cars=data.filter(data=>data.brandId==param["id"]);
        }
        else{

          this.cars=data;
        }
      })
    })
  }
}
