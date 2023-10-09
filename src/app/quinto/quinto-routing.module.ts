import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuintoPage } from './quinto.page';

const routes: Routes = [
  {
    path: '',
    component: QuintoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuintoPageRoutingModule {}
