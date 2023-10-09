import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
// import { RouterModule , Routes} from "@angular/router";
import {Storage} from '@ionic/storage-angular';


@Component({
  selector: 'app-cuarta',
  templateUrl: './cuarta.page.html',
  styleUrls: ['./cuarta.page.scss'],
})
export class CuartaPage implements OnInit {

  id:string='';
  valor:string='';
  
  constructor(
    private storage: Storage,
    public alertController: AlertController
  ) { }

  ngOnInit( ) {
    this.storage.create();
  }

  async agregar(){
    if (this.id  &&  this.valor) {
    await this.storage.set(this.id, this.valor);
    this.id = this.valor = '';
  }
  else{
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'No se puede agregar un número como id',
      buttons: ['OK']
    });
    await alert.present();
  }
  }

  // async agregar(){
  //   if (!this.id ) {
  //      this.mensAlerta(' agregar un número como id');
  //   } else if (!this.valor) {
  //      this.mensAlerta('agregar un número como valor');
  //   }
  // else{
  //   await this.storage.set(this.id, this.valor);
  //   this.id = this.valor = '';
  // }
  // }

  // async mensAlerta(alerta:string) {
  //   const alert = await this.alertController.create({
  //     // cssClass: 'my-custom-class',
  //     header: 'Alerta',
  //     subHeader : 'Mensaje de error',
  //     message: alerta,
  //     buttons: ['Aceptar']
  //   });
  //   await alert.present();
  // }
}
