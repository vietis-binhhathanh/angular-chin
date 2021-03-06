import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '@app/_services/account.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  formError: string;

  constructor(
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute, 
    private router: Router,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get loginForm() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Ngưng xử lý khi form chưa hợp lệ
    if (this.form.invalid) {
      return;
    }
  
    this.loading = true;
    this.accountService.login(this.loginForm.email.value, this.loginForm.password.value).pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/']);
        },
        error => {
          this.formError = error;
          this.loading = false;
        }
      );
  }
}
