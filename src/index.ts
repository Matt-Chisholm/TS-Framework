import { User } from "./models/User";

const user = new User({ name: 'new record', age: 0 });

user.on('change', () => {
    console.log('User was changed, need to update some HTML?')
});

user.set({ name: 'New name' });