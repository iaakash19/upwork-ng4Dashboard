import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  
  
  msgs = [];

  private validationMessages = {
    required: 'This Field is Required',
    pattern: 'Please Enter Valid Email'
  }

  emailMessage = '';

  resetForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]]
    });

    const email = this.resetForm.get('email');
    email.valueChanges.debounceTime(1000).subscribe(value => {
      this.setMessage(email);
    })
  }

  checkEmail() {
    const email = this.resetForm.get('email');
    this.setMessage(email);
  }
  
  setMessage(c: AbstractControl): void {
    
    this.emailMessage = '';
    if( (c.touched || c.dirty) && c.errors ) {
      
        this.emailMessage = Object.keys(c.errors).map(key =>
          this.validationMessages[key]).join(' ');
    }
  }
  onSubmit() {
     this.msgs.push({severity:'success', detail:'Email sent'});
    //  let timeoutId = setTimeout(() => {  
    //     this.router.navigate(['/login']);
    // }, 1000);
  }

}
