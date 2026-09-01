import { User } from "./types.js"

let users: User[] = [];

export function addUser(user:User): void {
    users.push(user);
}

export function getUser(): User[] {
    return users;
}