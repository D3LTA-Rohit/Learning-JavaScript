/*
    static - keyword that defines properties and methods that belong to a class itself rather than the
            objects created from that class (class owns anything static, not the objects)
*/

class User{
    static userCount = 0;
    constructor(username){
        this.username=username;
        User.userCount++;
    }
    
    introduce(){
        console.log(`Hello, I am ${this.username}.`);
    }

    static getUserCount(){
        return User.userCount;
    }
}

const user1 = new User("Ash");
const user2 = new User("Misty");
const user3 = new User("Brock");

user1.introduce();
user2.introduce();
user3.introduce();

console.log(`Total user: ${User.getUserCount()}`);