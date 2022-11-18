import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/core/model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  produto: Produtos[] =[]
  displayedColumns = ['idProdutos','nomeProdutos']

  constructor() { }

  ngOnInit(): void {
  }

}
