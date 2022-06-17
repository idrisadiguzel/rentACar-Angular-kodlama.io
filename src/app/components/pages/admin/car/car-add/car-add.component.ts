import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
import { Car } from './../../../../../models/car';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  car: Car = new Car();
  brand: Brand = new Brand();
  color: Color = new Color();
  carAddForm: FormGroup;
  brands: Brand[];
  colors: Color[];
  colorName: Color;
  getColorById: Color;

  constructor(
    private carService: CarService,
    private formBuilder: FormBuilder,
    private brandService: BrandService,
    private colorService: ColorService
  ) {}

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      dailyPrice: [, Validators.required],
      description: ['', Validators.required],
      colorName: ['', Validators.required],
      brandName: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.createCarAddForm();
    this.getBrand();
    this.getColor();
  }
  getBrand() {
    this.brandService.getBrand().subscribe((data) => {
      this.brands = data;
    });
  }
  getColor() {
    this.colorService.getColor().subscribe((data) => {
      this.colors = data;
    });
  }
  addCar() {
    let selectedBrand = this.brands.find((element) => element.name == this.carAddForm.value.brandName);
    let selectedColor = this.colors.find((element) => element.colorName == this.carAddForm.value.colorName);
    this.car.brandId = selectedBrand.id
    this.car.colorId = selectedColor.id
    this.car.brandName = this.carAddForm.get('brandName').value;
    this.car.colorName = this.carAddForm.get('colorName').value;
    this.car.dailyPrice = this.carAddForm.get('dailyPrice').value;
    this.car.description = this.carAddForm.get('description').value;
    this.carService.addCar(this.car).subscribe(data => {
      alert(data.description + " Başarıyla Eklendi.")
      location.reload()
    })
  }

}
