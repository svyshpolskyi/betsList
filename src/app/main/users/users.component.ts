import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  private users: {id: number, name: string} [] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.getAllUsers();
  }
}
