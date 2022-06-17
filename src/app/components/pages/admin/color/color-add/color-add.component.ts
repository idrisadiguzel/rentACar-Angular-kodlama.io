import { Color } from './../../../../../models/color';
import { ColorService } from './../../../../../services/color.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  constructor(private colorService:ColorService,private formBuilder: FormBuilder) { }
  colorAddForm:FormGroup
  color:Color
  colors:Color[];
  createColorAddForm() {
    this.colorAddForm = this.formBuilder.group({
      colorName: ["", Validators.required]
    })
  }

  ngOnInit(): void {
    this.createColorAddForm();
    this.getColor();
  }

  getColor(){
    this.colorService.getColor().subscribe(data=>{
      this.colors=data;
    })
  }

  addColor(){
    if (this.colorAddForm.valid) {
      this.color = Object.assign({}, this.colorAddForm.value)
    }
    this.colorService.addColor(this.color).subscribe(data => {
      alert(data.colorName + " Renk Başarıyla Eklendi.")
      location.reload();
    })

  }


}
