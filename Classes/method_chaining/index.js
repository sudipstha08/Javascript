
class User {
  // The constructor method is a special method for creating and 
  // initializing an object created with a class.
  // A constructor can use the super keyword to call the constructor of the super class.
  constructor(email, name) {
    this.email = email
    this.name = name
  }

  login() {
    console.log(this.email, 'just logged in')
  }

  logout() {
    console.log(this.email, 'just logged out')
  }
}

var userOne = new User('ryu@ninjas.com', 'Ryu')
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi')

userOne.login()
userTwo.logout()