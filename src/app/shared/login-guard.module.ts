import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private auth: AuthService,
              private router: Router) {}

  canActivate() {
    if (this.auth.loggedIn) {
      return true;
    }
    this.router.navigateByUrl('');
    return false;
  }
}
