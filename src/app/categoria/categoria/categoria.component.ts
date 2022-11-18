import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/core/model';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categoria: Categoria[] =[]
  displayedColumns =['idCategoria', 'nomeCategoria']

  constructor() { }

  ngOnInit(): void {
  }

}
