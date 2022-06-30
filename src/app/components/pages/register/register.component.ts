import { User } from './../../../models/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService, private formBuilder: FormBuilder) { }
  userAddForm: FormGroup;
  user: User;
  users: User[];
  createUserAddForm() {
    this.userAddForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]

    })
  }
  ngOnInit(): void {
    this.createUserAddForm();
  }
  addUser() {
    if (this.userAddForm.valid) {
      this.user = Object.assign({}, this.userAddForm.value)
    }
    this.authService.addUser(this.user).subscribe(data => {
      alert(data.email + " Kişi Başarıyla Eklendi.")
      location.reload();
    })

  }
}
