import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/core/model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  produto: Produtos[] =[
    {idProdutos: 1, nomeProdutos: 'Chuteira'},
    {idProdutos: 2, nomeProdutos: 'Volante'},
    {idProdutos: 3, nomeProdutos: 'Rimel'},
    {idProdutos: 4, nomeProdutos: 'Camisa do Brasil'},
    {idProdutos: 5, nomeProdutos: 'Óculos'}
  ]
  displayedColumns = ['idProdutos','nomeProdutos']

  constructor() { }

  ngOnInit(): void {
  }

}
