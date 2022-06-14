import { Color } from './../../../models/color';
import { ColorService } from './../../../services/color.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-category',
  templateUrl: './color-category.component.html',
  styleUrls: ['./color-category.component.css']
})
export class ColorCategoryComponent implements OnInit {

  constructor(private colorService:ColorService) { }
  colors:Color[];
  ngOnInit(): void {
    this.getColor();
  }

  getColor(){
    this.colorService.getColor().subscribe(data=>{
      this.colors = data;
    })
  }

}
