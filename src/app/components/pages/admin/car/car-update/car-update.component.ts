import { CarService } from './../../../../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  constructor(private carService: CarService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) { }

  car: Car;
  selectedId: number;
  cars: Car[];
  carUpdateForm: FormGroup;

  updateCarAddForm() {
    this.carUpdateForm = this.formBuilder.group({
      brandId: [this.car.brandId, Validators.required],
      colorId: [this.car.colorId, Validators.required],
      dailyPrice: [this.car.dailyPrice, Validators.required],
      description: [this.car.description, Validators.required],
      colorName: [this.car.colorName, Validators.required],
      brandName: [this.car.brandName, Validators.required]

    })
  }

  ngOnInit(): void {

    this.getCar();
    this.getCarById()
  }
  getCarById() {

    this.activatedRoute.params.subscribe(params => {
      if (params["id"])
        this.selectedId = params["id"]
    })
    this.carService.getCarById(this.selectedId).subscribe(data => {
      this.car = data
      this.updateCarAddForm();

    })

  }
getCar(){
  this.carService.getCar().subscribe(data=>{
    this.cars = data ;

  })
}

  updateCar() {
    if (this.carUpdateForm.valid) {
      this.car = Object.assign({}, this.carUpdateForm.value)
    }
    this.carService.updateCar(this.car).subscribe(data => {
      alert(data.description + " başarılıyla güncellendi")
      location.reload();

    })
  }



}
