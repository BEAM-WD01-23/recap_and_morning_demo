//ES6 class
//extends, super, sub-class ...
//I
    class Books{
        constructor(author, pageSize, genre, price, year){
            this.author = author;
            this.pageSize = pageSize;
            this.genre = genre;
            this.price = price;
            this.year = year
        }
        //method
        bookDescription(){
            console.log(`The author is ${this.author} has published in ${this.year}`);
        }
        calculateIt(a,b){
            return a*b
        }
    }
    //instantiate
    let book_1 = new Books('Marko', 250, 'fiction', '12€', 2018);
    //console.log(book_1);
    let result2 = book_1.calculateIt(2,5);
    //console.log(result2);
    let book_2 = new Books('Katarina', 180, 'criminal', '10€', 2020);
    //console.log(book_2);
    let result = book_1.bookDescription();
    //console.log(result);
    //
//II 
    //extends, super
    class subBook extends Books{
        constructor(author, pageSize, genre, price, year, bookName){
            super(author, pageSize, genre, price, year)
            this.bookName = bookName
        }
        //
        subBookDescription(){
            return `${this.author}, ${this.bookName}`;
        }
    }
    //instantiate
    let sub_book_one = new subBook('Christian', 280, 'commic', '11€', 2022, 'laugh is guaranteed');
    //console.log(sub_book_one);
    let result3 = sub_book_one.subBookDescription();
    console.log(result3);
