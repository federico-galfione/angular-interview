import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
// Validate the form and show the error message only if the input is invalid.
export class FormValidationComponent {
  userForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: [''],
      email: [''],
      age: [null]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.submitted = true;
      console.log(this.userForm.value);
    }
  }
} 