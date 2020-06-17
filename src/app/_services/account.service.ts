import { User } from './../_models/user';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(email, password) {
    return this.http.post<User>(`${environment.apiUrl}/auth/login`, {email, password}).pipe(
      map(user => {
        // Lưu thông tin người dùng và token vào key: user trong localStorage để lưu lại trạng thái đang đăng nhập của người dùng.
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      })
    );
  }

  logout() {
    // Xóa thông tin và đặt thông tin người dùng hiện tại thành null, chuyển về trang login.
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

  register(user: User) {
    return this.http.post(`${environment}/auth/register`, user);
  }
}
