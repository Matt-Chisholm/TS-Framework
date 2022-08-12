import { User } from "./models/User";

const user = new User({name: 'Matt', age: 28});

user.on('change', () => {

});

console.log(user);