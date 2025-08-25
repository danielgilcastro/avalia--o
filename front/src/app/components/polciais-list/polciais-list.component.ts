import { Component, inject, OnInit } from '@angular/core';
import { PoliciaisService } from '../../services/policiais.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-polciais-list',
  imports: [DatePipe],
  templateUrl: './polciais-list.component.html',
  styleUrl: './polciais-list.component.css'
})
export class PolciaisListComponent implements OnInit {

  policiaisService = inject(PoliciaisService);

  constructor() {
  }
  ngOnInit() {
    this.policiaisService.getPoliciais();
  }


  minhaLista = [
    { nome: 'Daniel', idade: 30 },
    { nome: 'Maria', idade: 25 },
    { nome: 'João', idade: 40 }
  ]

}
