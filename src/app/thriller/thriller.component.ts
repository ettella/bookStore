import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-thriller',
  templateUrl: './thriller.component.html',
  styleUrls: ['./thriller.component.scss']
})
export class ThrillerComponent implements OnInit {

  data: any[] = [];
  dataHead: string[] = ['id','title', 'medNumber', 'content'];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://books-c2aae-default-rtdb.europe-west1.firebasedatabase.app/books.json')
    // ('http://localhost:3000/books')
    .pipe(
      // catchError( error => {
      //   this.errorMessage = error.message;
      //   return throwError(error);
      // }),
      // $ json-server --watch db.json
      map( data => {
        let newData: any[] = [];
        Object.entries(data).forEach( ([key, value]) => { newData.push(value); } )
        // newData.sort( (x, y) => (x.title < y.title)? 1 : -1 );
        newData.sort((a,b)=>(a.title > b.title)? 1 : -1);
        return newData;
      })
      
    )
    .subscribe( (data: any[]) =>{
        this.data = data;        
        console.log(this.data);
    });
  }

}
