import { Component, OnInit, Input } from '@angular/core';
import { SalesProducts } from './salesProducts-model';

@Component({
  selector: 'app-reklam',
  templateUrl: './reklam.component.html',
  styleUrls: ['./reklam.component.scss']
})

export class ReklamComponent implements OnInit {

  @Input() salesProducts: SalesProducts[] = [];

  ngOnInit(): void {
  }



}
