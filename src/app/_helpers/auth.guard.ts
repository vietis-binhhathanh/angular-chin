import { AccountService } from './../_services/account.service';
import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private accountService: AccountService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.accountService.userValue;
        if (user) {
            return true;
        }

        // Chuyển đến trang login nếu chưa đăng nhập
        /* this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url }}); */
        this.router.navigate(['/login']);
        return false;
    }
}