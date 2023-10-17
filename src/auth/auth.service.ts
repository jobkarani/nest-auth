/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor( private usersService: UsersService) {};

    async validateUser( username: string, password: string): Promise<any>{
        const user = await this.usersService.findUser(username);

        if(user && user.password === password){
            const {username, password, ...rest} = user;

            return rest;
        }

        return null;
    }
}
