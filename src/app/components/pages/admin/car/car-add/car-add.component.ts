import { Car } from './../../../../../models/car';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  car: Car;
  carAddForm: FormGroup;
  constructor(private carService: CarService, private formBuilder: FormBuilder) { }

  createCardAddForm() {
    this.carAddForm = this.formBuilder.group({
      brandId: ["", Validators.required],
      colorId: ["", Validators.required],
      dailyPrice: ["", Validators.required],
      description: ["", Validators.required],
      colorName: ["", Validators.required],
      brandName: ["", Validators.required]

    })
  }
  ngOnInit(): void {
    this.createCardAddForm();
  }
  addCar() {
    if (this.carAddForm.valid) {
      this.car = Object.assign({}, this.carAddForm.value)
    }
    this.carService.addCar(this.car).subscribe(data => {
      alert(data.description + " Başarıyla Eklendi.")
      location.reload();
    })

  }


}
