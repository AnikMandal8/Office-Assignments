class Professor{
    constructor(name,subject){
        this.name = name;
        this.subject = subject
    }

    introduceSelf(){
        console.log(`My name is ${this.name} and I teach ${this.subject}`)
    }

}

let Prof1 = new Professor("Sam","English");
// Prof1.introduceSelf();
// console.log(Prof1.name);

let NameObj={
    fname: "anik",
    lname: "Mandal",
    age:26,
    printName: function(){
        console.log(`My name is ${this.fname}`);
    }
}
console.log(NameObj.printName())
const name1 = new Object(NameObj);
// name1 = NameObj;
console.log(name1);

