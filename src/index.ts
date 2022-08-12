import { User } from "./models/User";

const user = new User({name: 'Matt', age: 28});

console.log(user.get('name'));
console.log(user.get('age'));