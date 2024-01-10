import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'Angular é maneiro',
    autoria: 'Marcinho',
    modelo: 'modelo2'
  }

  constructor() { }

  ngOnInit(): void {
  }
  
  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 266) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
}
