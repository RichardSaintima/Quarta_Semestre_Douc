import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuintoPageRoutingModule } from './quinto-routing.module';

import { QuintoPage } from './quinto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuintoPageRoutingModule
  ],
  declarations: [QuintoPage]
})
export class QuintoPageModule {}
