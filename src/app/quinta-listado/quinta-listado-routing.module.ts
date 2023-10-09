import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuintaListadoPage } from './quinta-listado.page';

const routes: Routes = [
  {
    path: '',
    component: QuintaListadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuintaListadoPageRoutingModule {}
