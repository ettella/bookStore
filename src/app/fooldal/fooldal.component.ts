import { Component, OnInit } from '@angular/core';
import { SalesProducts } from '../reklam/salesProducts-model';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Book } from '../book-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fooldal',
  templateUrl: './fooldal.component.html',
  styleUrls: ['./fooldal.component.scss']
})
export class FooldalComponent implements OnInit {

  books: Book[] = [];
  // books: Book[] = this.getBooksFromLS('books');
  myForm: FormGroup;
  isSubmit: boolean = false;

  // newBook: Book = new Book();
  // book!: Book;
  // currentId!: number;

  products: SalesProducts[] = [];
  
  constructor(public fb: FormBuilder, 
    // private activatedRoute: ActivatedRoute
    ) {
    this.myForm = fb.group(
      { id: [Number],
        title: ['', Validators.required],
        medNumber: ['', Validators.required, Validators.minLength(10), Validators.maxLength(13)],
        content: ['', Validators.required],
      }
    );

    this.products = [
      {
      name:'Vikings',
      price:23,
      sale: false
      },
      {
      name:'Pride and Prejudice',
      price:10,
      sale: true
      },
      {
      name:'Holy Mary',
      price:31,
      sale: false
      },
    ];

    // this.currentId = activatedRoute.snapshot.params['id'];

  };

  ngOnInit(): void {
    // if (this.currentId == 0) {
    //   this.book = this.newBook;
    // } else {
    //   this.book = this.getBooksFromLSByID(this.currentId);
    //   const { id, title, medNumber, content } = this.book;
    //   this.myForm.patchValue({
    //     id, title, medNumber, content
    //   })
    // }
  }

  get title():FormControl {
    return this.myForm.get('title') as FormControl;
  };

  get medNumber():FormControl {
    return this.myForm.get('medNumber') as FormControl;
  };

  get content():FormControl {
    return this.myForm.get('content') as FormControl;
  };

  // setItemToLS(){
  //   localStorage.setItem('books', JSON.stringify(this.books))
  // }

  // public getBooksFromLS(key: string){
  //   this.books = JSON.parse(localStorage.getItem(key) || '[]');
  //   return this.books;
  // }

  // public getBooksFromLSByID(id: number){
  //   let index = this.books.findIndex(x=>x.id == id);
  //   return this.books[index];
  // }

  // public saveBookToLS(book: Book){
  //   let index = this.books.findIndex(x=>x.id == book.id);
  //   this.books.splice(index,1, book);
  //   // this.players[index] = player;
  //   this.setItemToLS();
  //  }

  // public saveBooksToLS(key: any, books: Book[]){
  //   localStorage.setItem(key, JSON.stringify(books));
  //  }

  onSubmit(book:Book){
    this.books.push(book);
    this.isSubmit = true;
    // this.setItemToLS();
    // this.saveBookToLS(book);
    this.myForm.reset();
  }

  // public addNewBook(book: Book){
  //   // adding 1 player to the maximum id of the object:
  //   const ids = this.books.map(obj =>obj.id);
  //   const maxID = Math.max(...ids);
  //   book.id = maxID + 1;
  //   this.books.push(book);
  //   this.setItemToLS();
  // }

  // onSubmit(){ 
  //   let savedBook: Book = this.myForm.value as Book;
  //   if (this.currentId == 0) {
  //     this.addNewBook(savedBook);
  //   } else {
  //     this.saveBookToLS(savedBook);
  //   }
}
