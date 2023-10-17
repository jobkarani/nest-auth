/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

export type User = {
    id: number,
    name: string,
    username: string,
    password: string
  }

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: "Job",
            username: "Ayub",
            password: "papi" 
        },
        {
            id: 2,
            name: "Mandela",
            username: "Madi",
            password: "dumbo" 
        },
    ];

    async findUser(username: string): Promise<User | undefined>{
        return this.users.find(user => user.username === username);
    }
}
