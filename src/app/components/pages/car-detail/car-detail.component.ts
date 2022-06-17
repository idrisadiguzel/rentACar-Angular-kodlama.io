import { CartItem } from 'src/app/models/cartItem';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Car } from './../../../models/car';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CarProperty } from 'src/app/models/carProperty';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {


    constructor(
      private carService: CarService,
      private activatedRoute: ActivatedRoute,
      private cartService: CartService,
      private formBuilder: FormBuilder
    ) {}
    car: Car;
    carProps: CarProperty[];
    carPropForm: FormGroup;
    isCheck: boolean = false;
    cart: CartItem;

    ngOnInit(): void {
      this.getCarDetail();
      this.getCarProps();
      this.createCarPropForm();
    }

    createCarPropForm() {
      this.carPropForm = this.formBuilder.group({
        name: [''],
      });
    }

    addCarProp() {
      if (this.carPropForm.valid) {
        this.carProps = Object.assign({}, this.carPropForm.value);
      }
    }

    getCarDetail() {
      this.carService.getCar().subscribe((data) => {
        this.activatedRoute.params.subscribe((param) => {
          if (param['id']) {
            this.car = data.find((data) => data.id == param['id']);
          }
        });
      });
    }

    getCarProps() {
      this.cartService.getCarProps().subscribe((data) => {
        this.carProps = data;
      });
    }

    onChange(name: string, isCheck: boolean) {}
  }
