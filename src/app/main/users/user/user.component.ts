import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  paramsSubscription: Subscription;
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute,
              private usersService: UsersService) {

  }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.user = this.usersService.getUser(id);
    this.route.params.
      subscribe(
        (params: Params) => {
          this.user = this.usersService.getUser(+params['id']);
        }
      );
  }

}
