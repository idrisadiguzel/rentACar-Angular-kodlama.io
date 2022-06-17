import { CarService } from './../../../../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css'],
})
export class CarUpdateComponent implements OnInit {
  constructor(
    private carService: CarService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService,
    private colorService: ColorService
  ) {}

  car: Car = new Car();
  brand: Brand = new Brand();
  color: Color = new Color();
  brands: Brand[];
  colors: Color[];
  colorName: Color;
  getColorById: Color;
  carUpdateForm: FormGroup;
  cars: Car[]

  updatecarUpdateForm() {
    this.carUpdateForm = this.formBuilder.group({
      dailyPrice: [this.car.dailyPrice, Validators.required],
      description: [this.car.description, Validators.required],
      colorName: [this.car.colorName, Validators.required],
      brandName: [this.car.brandName, Validators.required],
    });
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

  ngOnInit(): void {
    this.getCar();
    this.getCarById();
    this.getBrand()
    this.getColor()
  }
  getCarById() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.carService.getCarById(params['id']).subscribe((data) => {
          this.car = data;
          this.updatecarUpdateForm();
        });
      }
    });
  }
  getCar() {
    this.carService.getCar().subscribe((data) => {
      this.cars = data;
    });
  }

  updateCar() {
    if (this.carUpdateForm.valid) {
      let selectedBrand = this.brands.find(
        (element) => element.name == this.carUpdateForm.value.brandName
      );
      let selectedColor = this.colors.find(
        (element) => element.colorName == this.carUpdateForm.value.colorName
      );
      console.log(selectedBrand,selectedColor)
      this.car.brandId = selectedBrand.id;
      this.car.colorId = selectedColor.id;
      this.car.brandName = this.carUpdateForm.get('brandName').value;
      this.car.colorName = this.carUpdateForm.get('colorName').value;
      this.car.dailyPrice = this.carUpdateForm.get('dailyPrice').value;
      this.car.description = this.carUpdateForm.get('description').value;
    }
    this.carService.updateCar(this.car).subscribe((data) => {
      alert(data.description + ' başarılıyla güncellendi');
      location.reload();
    });
  }
}
