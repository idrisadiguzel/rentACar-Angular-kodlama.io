import { BrandService } from 'src/app/services/brand.service';
import { Brand } from 'src/app/models/brand';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-admin',
  templateUrl: './brand-admin.component.html',
  styleUrls: ['./brand-admin.component.css']
})
export class BrandAdminComponent implements OnInit {

  constructor(private brandService: BrandService) { }
  brand: Brand;
  brands: Brand[];
  selectedId: number
  brandName:Brand


  ngOnInit(): void {
    this.getBrand();


  }

  getBrand() {
    this.brandService.getBrand().subscribe(data => {
      this.brands = data;
    })
  }


  deleteBrand(selectedId: number) {

    if (confirm("Silmek istediğinize emin misiniz?")) {
      this.brandService.deleteBrand(selectedId).subscribe(data=>{
        this.brandName = data
        alert("Başarıyla silindi.")
      })
      location.reload();
    }


  }


}
