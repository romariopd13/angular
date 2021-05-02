import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  cursos: string[] = ["Angular"]

  mostrarCursos: boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos
  }
}
