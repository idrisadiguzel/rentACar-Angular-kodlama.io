import { Brand } from 'src/app/models/brand';
import { FormBuilder, Validators, NgForm, FormGroup } from '@angular/forms';
import { BrandService } from 'src/app/services/brand.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  constructor(private brandService: BrandService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) { }

  brand: Brand
  brandUpdateForm: FormGroup;

  selectedId: number;

  brands: Brand[];

  updateBrandForm() {
    this.brandUpdateForm = this.formBuilder.group({
      id: [this.brand.id, Validators.required],
      name: [this.brand.name, Validators.required],
      logo: [this.brand.logo, Validators.required],


    })
  }

  ngOnInit(): void {
    this.getBrand();
    this.getBrandById();
  }

  getBrand() {
    this.brandService.getBrand().subscribe(data => {
      this.brands = data;
    })
  }


  updateBrand() {
    if (this.brandUpdateForm.valid) {
      this.brand = Object.assign({}, this.brandUpdateForm.value)
    }
    this.brandService.updateBrand(this.brand).subscribe(data => {
      alert(data.name + " başarılıyla güncellendi")
      location.reload();

    })
  }


  getBrandById() {

    this.activatedRoute.params.subscribe(params => {
      if (params["id"])
        this.selectedId = params["id"]
    })
    this.brandService.getBrandById(this.selectedId).subscribe(data => {
      this.brand = data
      this.updateBrandForm();

    })

  }

}
