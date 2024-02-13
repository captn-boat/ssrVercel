import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', { validators: Validators.required, nonNullable: true }),
    password: new FormControl('', { validators: Validators.required, nonNullable: true }),
  });

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {

  }

  login() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.authService.login(this.form.value.username!, this.form.value.password!).subscribe((result) => {
        this.router.navigateByUrl('/');
      });
    }
  }

}
