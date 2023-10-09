import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuintaListadoPageRoutingModule } from './quinta-listado-routing.module';

import { QuintaListadoPage } from './quinta-listado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuintaListadoPageRoutingModule
  ],
  declarations: [QuintaListadoPage]
})
export class QuintaListadoPageModule {}
