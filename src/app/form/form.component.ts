import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SignatureService} from '../service/signature.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    SignatureService
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  formElement: FormGroup;
  @Output() formValuesChanged = new EventEmitter<any>();
  constructor(private fb: FormBuilder, private signatureService: SignatureService) {
    this.formElement = this.fb.group({
      closingText: ['', [Validators.required, Validators.minLength(10)]],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      functionTitle: ['', [Validators.required, Validators.minLength(2)]],
      company: ['', Validators.required],
      personalEmail: ['', [Validators.required, Validators.email]],
      companyEmail: ['', [Validators.required, Validators.email]],
      linkedinLink: ['', [Validators.required, Validators.minLength(2)]],
      companyPhoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      mobilePhoneNUmber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      website: ['']
    });
  }
  ngOnInit() {
    this.formElement.valueChanges.subscribe(value => {
      console.log(value);
      this.formValuesChanged.emit(value);
    });
  }
}
