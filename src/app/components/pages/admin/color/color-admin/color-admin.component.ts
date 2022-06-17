import { Color } from '../../../../../models/color';
import { ColorService } from '../../../../../services/color.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-admin',
  templateUrl: './color-admin.component.html',
  styleUrls: ['./color-admin.component.css']
})
export class ColorAdminComponent implements OnInit {

  constructor(private colorService: ColorService) { }
  colors: Color[];
  colorName:Color;
  ngOnInit(): void {
    this.getColor();

  }


  getColor() {
    this.colorService.getColor().subscribe(data => {
      this.colors = data;
    })
  }

  deleteBrand(selectedId: number) {
    if (confirm("Silmek istediğinize emin misiniz?")) {
      this.colorService.deleteColor(selectedId).subscribe(data=>{
        this.colorName = data
        alert("Başarıyla silindi.")
      })
      location.reload();
    }


  }

}
