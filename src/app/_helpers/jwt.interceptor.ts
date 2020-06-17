import { environment } from '@environments/environment';
import { AccountService } from './../_services/account.service';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private accountService: AccountService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Gửi token trong header để xác thực nếu user đã đăng nhập
    const user = this.accountService.userValue;
    const isLoggedIn = user && user.token;
    const isApiUrl = req.url.startsWith(environment.apiUrl);
    if (isLoggedIn && isApiUrl) {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${user.token}` },
      });
    }

    return next.handle(req);
  }
}
