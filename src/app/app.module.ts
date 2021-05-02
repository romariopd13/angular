import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { CursosModule } from './cursos/cursos.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { NgIfComponent } from './diretiva/ng-if/ng-if.component';
import { NgSwitchComponent } from './diretiva/ng-switch/ng-switch.component';
import { CommonModule } from '@angular/common';
import { NgForComponent } from './diretiva/ng-for/ng-for.component';
import { NgClassComponent } from './diretiva/ng-class/ng-class.component';
import { NgStyleComponent } from './diretiva/ng-style/ng-style.component';
import { OperadorElvisComponent } from './diretiva/operador-elvis/operador-elvis.component';
import { NgContentComponent } from './diretiva/ng-content/ng-content.component';
import { FundoAmareloDirective } from './diretiva/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './diretiva/diretivas-customizadas/diretivas-customizadas.component';
import { HighlightMouseDirective } from './diretiva/highlight-mouse.directive';
import { HighlightDirective } from './diretiva/highlight.directive';
import { NgElseDirective } from './diretiva/ng-else.directive';
import { ExemplosPipesComponent } from './pipes/exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipePipe } from './pipes/camel-case-pipe.pipe';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FiltroArrayPipePipe } from './pipes/filtro-array-pipe.pipe';
import { FiltroArrayImpuroPipe } from './pipes/filtro-array-impuro.pipe';

registerLocaleData(localePt);

const routes: Routes = [
  {
    path: '',
    component: DataBindingComponent,
  },
  // { path: 'products/:productId', component: ProductDetailsComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductAlertsComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    OperadorElvisComponent,
    NgContentComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective,
    ExemplosPipesComponent,
    CamelCasePipePipe,
    FiltroArrayPipePipe,
    FiltroArrayImpuroPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CursosModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
