import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/core/model';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categoria: Categoria[] =[
    {idCategoria: 1, nomeCategoria: 'Futebol'},
    {idCategoria: 2, nomeCategoria: 'Carros'},
    {idCategoria: 3, nomeCategoria: 'Beleza'},
    {idCategoria: 4, nomeCategoria: 'Roupas'},
    {idCategoria: 5, nomeCategoria: 'Acessórios'}
  ]
  displayedColumns =['idCategoria', 'nomeCategoria']

  constructor() { }

  ngOnInit(): void {
  }

}
