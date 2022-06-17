import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  constructor(private brandService: BrandService, private formBuilder: FormBuilder) { }
  brandAddForm: FormGroup;
  brand: Brand;
  brands: Brand[];
  createBrandAddForm() {
    this.brandAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      logo: ["./assets/brand/default.png", Validators.required]

    })
  }
  ngOnInit(): void {
    this.createBrandAddForm();
  }
  addBrand() {
    if (this.brandAddForm.valid) {
      this.brand = Object.assign({}, this.brandAddForm.value)
    }
    this.brandService.addBrand(this.brand).subscribe(data => {
      alert(data.name + " Markası Başarıyla Eklendi.")
      location.reload();
    })

  }
}




