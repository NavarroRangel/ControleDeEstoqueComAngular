import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  loginCard = true;

  loginForm = this.formBuilder.group({
    email : ['', Validators.required],
    password: ['', Validators.required],
  });

  signUpForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private formBuilder : FormBuilder){}

  onSubmitLoginForm(): void {
    console.log("DADOS DO LOGIN", this.loginForm.value);

  }
  onSubmitSignUpFormForm(): void {
    console.log("DADOS DO form de craiacaço", this.signUpForm.value);

  }


}
