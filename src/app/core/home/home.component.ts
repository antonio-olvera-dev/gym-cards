import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  forma: FormGroup;
  date:Date = new Date();

  constructor(private fb: FormBuilder, private users:UsersService,private router:Router) { this.createForm(); }

  ngOnInit(): void {

  }

  createForm() {

    this.forma = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      heigh: ['', [Validators.minLength(2)]],
      weigh: ['', [Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.minLength(3), Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      adress: ['', [Validators.required, Validators.minLength(4)]],
      validation: [`${this.date}`, [Validators.required, Validators.minLength(8)]],
    });

  }

  saveForm() {
    if (this.forma.status === 'VALID') {
      let obj = {
        name:  this.forma.get('name').value,
        heigh: this.forma.get('heigh').value,
        weigh: this.forma.get('weigh').value,
        email: this.forma.get('email').value,
        adress: this.forma.get('adress').value,
        validators: this.forma.get('validation').value
      }
      this.users.users.push(obj);
      this.router.navigate(['/users']);
      
    }
  }

  get validName():boolean{ return this.forma.controls.name.status !== 'INVALID' && this.forma.controls.name.touched; }
  get invalidName():boolean{ return this.forma.controls.name.status === 'INVALID' && this.forma.controls.name.touched; }

  get validHeigh():boolean{ return this.forma.controls.heigh.status !== 'INVALID' && this.forma.controls.heigh.touched; }
  get invalidHeigh():boolean{ return this.forma.controls.heigh.status === 'INVALID' && this.forma.controls.heigh.touched; }

  get validWeigh():boolean{ return this.forma.controls.weigh.status !== 'INVALID' && this.forma.controls.weigh.touched; }
  get invalidWeigh():boolean{ return this.forma.controls.weigh.status === 'INVALID' && this.forma.controls.weigh.touched; }

  get validEmail():boolean{ return this.forma.controls.email.status !== 'INVALID' && this.forma.controls.email.touched; }
  get invalidEmail():boolean{ return this.forma.controls.email.status === 'INVALID' && this.forma.controls.email.touched; }

  get validAdress():boolean{ return this.forma.controls.adress.status !== 'INVALID' && this.forma.controls.adress.touched; }
  get invalidAdress():boolean{ return this.forma.controls.adress.status === 'INVALID' && this.forma.controls.adress.touched; }

  get validValidation():boolean{ return this.forma.controls.validation.status !== 'INVALID' && this.forma.controls.validation.touched; }
  get invalidValidation():boolean{ return this.forma.controls.validation.status === 'INVALID' && this.forma.controls.validation.touched; }

}
