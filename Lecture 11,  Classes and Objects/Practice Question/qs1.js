const print = console.log

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        print(`Name: ${this.name}, Email: ${this.email}`)

    }
}

class Admin extends User {
    constructor(name, email, role) {
        super(name, email)
        this.role = role
    }
    adminInfo() {
        print(`Name: ${this.name}, Email: ${this.email}, Role: ${this.role}`)
    }
    editData() {
        print(`Editing data for ${this.name} with email ${this.email}`)
    }
}


let student1 = new User("Sishir Siam", "shishir.siam01@gmail.com")
student1.viewData()

let student2 = new User("Jisha Sabrin", 'jishaislam01@gmail.com')
student2.viewData()

let admin1 = new Admin('shishirRsiam', 'shishir.siam01@gmail.com', 'admin')
admin1.editData()
admin1.adminInfo()