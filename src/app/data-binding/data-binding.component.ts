import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImage: string = 'http://lorempixel.com/400/200/nature/';
  valorSalvo = ""
  valorAtual: string = ""
  isMouseOver: boolean = false
  nome: string = 'abc'
  pessoa = {
    nome: "Romario",
    idade: "23",
    endereco: {
      cidade: "Santa Fé do Sul"
    }
  }

  nomeDoCurso: string = "Angular"
  constructor() { }

  ngOnInit(): void {
  }
  getValor(): number {
    return 1;
  }
  getCurtirCurso(): boolean {
    return true;
  }
  botaoClicado() {
    alert("Botão clicado")
  }
  onKeyup(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
  salvarValor(valor) {
    this.valorSalvo = valor
  }
  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver
  }
  onMudouValor(evento) {
    console.log(evento.novoValor);

  }
}
