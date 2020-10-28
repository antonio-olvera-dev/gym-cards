import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  forma: FormGroup;

  constructor(private fb: FormBuilder) { this.createForm(); }

  ngOnInit(): void {

  }

  createForm() {

    this.forma = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      heigh: ['', [Validators.minLength(3)]],
      weigh: ['', [Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3), Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      adress: ['', [Validators.required, Validators.minLength(3)]],
      validation: ['', [Validators.required, Validators.minLength(3)]],
    });

  }

  get validName():boolean{
   

    return this.forma.controls.name.status !== 'INVALID';
  }


  saveForm() {
    console.log(this.forma);
    //this.forma.reset();
  }

}
