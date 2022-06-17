import { Car } from './../../../models/car';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { Brand } from './../../../models/brand';
import { BrandService } from './../../../services/brand.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-category',
  templateUrl: './brand-category.component.html',
  styleUrls: ['./brand-category.component.css'],
})
export class BrandCategoryComponent implements OnInit {
  constructor(private brandService: BrandService) {}
  selectedId: number;
  brands: Brand[];
  cars: Car[];

  ngOnInit(): void {
    this.getBrand();
  }

  getBrand() {
    this.brandService.getBrand().subscribe((data) => {
      this.brands = data;
    });
  }
}
