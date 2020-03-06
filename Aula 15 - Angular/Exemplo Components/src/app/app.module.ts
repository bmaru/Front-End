import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotaoComponent } from './botao/botao.component';
import { RodapeComponent } from './rodape/rodape.component';
import { TopoComponent } from './topo/topo.component';

@NgModule({
  declarations: [
    AppComponent,
    BotaoComponent,
    RodapeComponent,
    TopoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
