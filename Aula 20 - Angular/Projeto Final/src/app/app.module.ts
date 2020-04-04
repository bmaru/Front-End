import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionsComponent } from './collections/collections.component';
import { MenuComponent } from './menu/menu.component';
import { FotosComponent } from './fotos/fotos.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectionsComponent,
    MenuComponent,
    FotosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
