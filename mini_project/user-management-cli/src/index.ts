import { addUser, getUser } from "./userService";
import { User } from "./types";

const user: User = {
  id: 1,
  name: "Watayut",
  email: "watayut@gmail.com",
  age: 23,
  role: "member"
};

addUser(user);

console.log(getUser());