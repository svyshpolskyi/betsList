import { Injectable } from '@angular/core';

@Injectable()

export class UsersService {
    private users = [
        {
          id: 1,
          name: 'User1'
        },
        {
          id: 2,
          name: 'User2'
        },
        {
          id: 3,
          name: 'User3'
        }
      ];

    getAllUsers() {
        return this.users;
    }

    getUser(id: number) {
        const user = this.users.find(
            (u) => {
                return u.id === id;
            }
        );
        return user;
    }
}
