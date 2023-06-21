    //greeting to the console with the person's name. Create a new instance of Person using the 
    //new keyword and pass in some values for the properties. Call the greet method on the new instance 
    //to log the greeting to the console.

//i, 
    const person = {
        name: 'Alison',
        age: 30,
        gender: 'male'
    }
    //console.log(person);//{ name: 'Alison', age: 30, gender: 'male' }
    //
//ii
    class Person {
        constructor(name, age, gender){
            this.name = name;
            this.age = age;
            this.gender = gender
        }
        greet(){
            return `Hello this is ${this.name} I am ${this.age} years old and I am ${this.gender}`;
        }
    }
    //instantiate
    let person_one = new Person('Alison', 30, 'male');
    let result = person_one.greet();
    //console.log(result);//Hello this is Alison I am 30 years old and I am male
    
//iii
    class BankAccount{
        constructor(balance){
            this.balance = balance;
            this.transactions = [];
        }
        //method
        deposit(amount){
            //let myTotal = this.balance + amount
            this.transactions.push({
                date: new Date().toLocaleDateString(),
                amount: this.balance + amount
            })
            console.log(this.transactions);//[ { date: '6/21/2023', amount: 12500 } ]
        }
        //
        withdraw(amount){
            let myTotal = this.balance - amount
            this.transactions.push({
                date: new Date().toLocaleDateString(),
                amount: myTotal,
            })
            console.log(this.transactions);
        }
        //
        //Create a method getBalance that returns the current balance.
        getBalance(){
            return this.balance;
        }
        //
        getTransaction(){
            return this.transactions
        }
    }
    //
    let my_bank_details = new BankAccount(10000);
    let myDeposit = my_bank_details.deposit(2500);//{ date: '6/21/2023', amount: 12500 }
    let myWithdraw = my_bank_details.withdraw(200);//{ date: '6/21/2023', amount: 9800 }
    let myBalance = my_bank_details.getBalance();//10000
    let myTransaction = my_bank_details.getTransaction();
    //console.log(myTransaction);





