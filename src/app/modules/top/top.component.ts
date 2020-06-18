import { AccountService } from './../../_services/account.service';
import { User } from './../../_models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  user: User;
  username: User;

  constructor(
    private accountService: AccountService
  ) { 
    this.accountService.user.subscribe(x => this.user = x);  
  }

  ngOnInit(): void {
  }

}
