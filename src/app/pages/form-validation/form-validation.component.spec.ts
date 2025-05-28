import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormValidationComponent } from './form-validation.component';

describe('FormValidationComponent', () => {
  let component: FormValidationComponent;
  let fixture: ComponentFixture<FormValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormValidationComponent, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form initially', () => {
    expect(component.userForm.valid).toBeFalsy();
  });

  it('should validate name field', () => {
    const nameControl = component.userForm.get('name');
    expect(nameControl?.valid).toBeFalsy();
    expect(nameControl?.errors?.['required']).toBeTruthy();

    nameControl?.setValue('J');
    expect(nameControl?.errors?.['minlength']).toBeTruthy();

    nameControl?.setValue('John');
    expect(nameControl?.errors).toBeNull();
  });

  it('should validate email field', () => {
    const emailControl = component.userForm.get('email');
    expect(emailControl?.valid).toBeFalsy();
    expect(emailControl?.errors?.['required']).toBeTruthy();

    emailControl?.setValue('invalid-email');
    expect(emailControl?.errors?.['email']).toBeTruthy();

    emailControl?.setValue('valid@email.com');
    expect(emailControl?.errors).toBeNull();
  });

  it('should validate age field', () => {
    const ageControl = component.userForm.get('age');
    expect(ageControl?.valid).toBeFalsy();
    expect(ageControl?.errors?.['required']).toBeTruthy();

    ageControl?.setValue(16);
    expect(ageControl?.errors?.['min']).toBeTruthy();

    ageControl?.setValue(25);
    expect(ageControl?.errors).toBeNull();
  });

  it('should set submitted flag when form is valid', () => {
    component.userForm.setValue({
      name: 'John Doe',
      email: 'john@example.com',
      age: 25
    });

    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });

  it('should not set submitted flag when form is invalid', () => {
    component.userForm.setValue({
      name: 'J',
      email: 'invalid-email',
      age: 16
    });

    component.onSubmit();
    expect(component.submitted).toBeFalsy();
  });
}); 