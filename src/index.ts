import { User } from "./models/User";

const user = new User({ name: 'Matt', age: 28 });

user.on('change', () => {
    console.log('c1');
});

user.on('change', () => {
    console.log('c2');
});

user.on('save', () => {
    console.log('save was triggered');
});

user.trigger('wewas');
user.trigger('save');