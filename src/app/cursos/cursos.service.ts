import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  emitirCursoCriado = new EventEmitter<string>()
  // static criouNovoCurso = new EventEmitter<string>()
  cursos: string[] = ['Java', 'Ext Js', 'Angular', 'Laravel'];
  constructor() { }

  getCursos() {
    return this.cursos
  }
  addCurso(curso: string) {
    this.cursos.push(curso)
    this.emitirCursoCriado.emit(curso)
    // CursosService.criouNovoCurso.emit(curso)
  }
}
