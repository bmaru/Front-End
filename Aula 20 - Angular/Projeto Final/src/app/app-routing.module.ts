import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FotosComponent } from './fotos/fotos.component';


const routes: Routes = [
  { path: '', component: FotosComponent },
  { path: 'racas/:name', component: FotosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
