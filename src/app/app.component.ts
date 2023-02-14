import { Component } from '@angular/core';
import { SalesProducts } from './reklam/salesProducts-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  Name: string = 'Eszter Krutilla'
  title = 'bookStore';
}
