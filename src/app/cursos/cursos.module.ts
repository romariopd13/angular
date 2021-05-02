import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';



@NgModule({
  declarations: [CursosComponent, CursoDetalheComponent, CriarCursoComponent],
  exports: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CursosModule { }
