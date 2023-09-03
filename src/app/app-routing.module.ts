import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LovedComponent } from './components/loved/loved.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: LovedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
