import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multistep',
  templateUrl: './multistep.component.html',
  styleUrls: ['./multistep.component.css']
})
export class MultistepComponent implements OnInit {

  personalDetails!: FormGroup;
  addressDetails!: FormGroup;
  educationalDetails!: FormGroup;
  // personal_step = false;
  // address_step = false;
  // education_step = false;
  steps = 1;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.personalDetails = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required]
    });
    this.addressDetails = this.formBuilder.group({
      city: ['', Validators.required],
      address: ['', Validators.required],
      pincode: ['', Validators.required]
    });
    this.educationalDetails = this.formBuilder.group({
      highest_qualification: ['', Validators.required],
      university: ['', Validators.required],
      total_marks: ['', Validators.required]
    });


  }

  get personal() { return this.personalDetails.controls; }
  get education() { return this.educationalDetails.controls; }
  get address() { return this.addressDetails.controls; }


  next() {
    if (this.steps == 1) {
      // this.personal_step = true;
      if (this.personalDetails.invalid) { return }
      this.steps++
    }
    else if (this.steps == 2) {
      // this.address_step = true;
      if (this.addressDetails.invalid) { return }
      this.steps++;
    }
  }
  previous() {
    if (this.steps == 2) {
      // this.education_step = false;
      this.steps--
      
    }
    else if (this.steps == 3) {
      // this.education_step = false;
      this.steps--
    }
  }
  submit() {
    if (this.steps == 3) {
      // this.education_step = true;
      if (this.educationalDetails.invalid) { return }
    }
  }

}
