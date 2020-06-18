import { AccountService } from './../../app/_services/account.service';
import { User } from './../../app/_models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User;

  constructor(
    private accountService: AccountService
  ) { 
    this.accountService.user.subscribe(x => this.user = x);
  }

  ngOnInit(): void {}

  logout() {
    this.accountService.logout();
  }

}
