import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';
import { ToastController } from '@ionic/angular';
import { async } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-quinto',
  templateUrl: './quinto.page.html',
  styleUrls: ['./quinto.page.scss'],
})
export class QuintoPage implements OnInit {
  persona : any = [];


  constructor(
    private crudService: CrudService,
    private toast:ToastController,
    private router: Router,
    private activated:ActivatedRoute
  ) { }

  ngOnInit() {
    this.activated.paramMap.subscribe(paramMap =>{
      let rut = paramMap.get('rut')??'';
       this.crudService.leer(rut).
       then( x => {
         this.persona = x
        });
      })
      
  }
 
  async agregar () {
    if(!this.persona.rut) {
      this.mensError('Ingrese rut');
    } else if (!this.persona.nombre) {
      this.mensError('Ingrese nombre');
    } else if (!this.persona.fecha) {
      this.mensError('Ingrese Fecha de nacimiento');
    } else if (!this.persona.correo){
      this.mensError('Ingrese correo');
    } else if (!this.persona.telefono){
      this.mensError('Ingrese telefono');
    } else if (!this.persona.direccion){
      this.mensError('Ingrese direccion');
    }else{
        await  this.crudService.guardar(
          this.persona.rut,
          this.persona);
        this.mensExito('Persona fue guradada');
        this.persona = [];        
    }
    
  }

  async leer() {
    if(!this.persona.rut) 
      this.mensError('Falta el rut');
    else {
      await this.crudService.leer(this.persona.rut).
      then( x => {
        this.persona = x})

      if(!this.persona) {
        this.mensError('Persona no encontrada');
        this.persona = [];
      }
    
    }
  }
  async eliminar(){
    if(!this.persona.rut) 
      this.mensError('Falta el rut');
    else {
      await this.crudService.eliminar(this.persona.rut);
      this.mensExito('Persona fue eliminada con exito');
      this.persona = [];
    }
  }
  async limpiar(){
    if(this.persona.rut) 
      this.persona = [];
  }

async lista() {
  this.router.navigateByUrl('/quinta-listado');
}

 async mensError( alerta: string) {
    const toast = await this.toast.create({
      message: alerta,
      duration: 2000, 
      icon : 'alert-outline',
      position: 'top', 
      color: 'danger',
      // buttons: ['Aceptar'] 
    });
    await toast.present();
 }

 async mensExito( alerta: string) {
    const toast = await this.toast.create({
      message: alerta,
      duration: 2000, 
      icon : 'alert-outline',
      position: 'top', 
      color: 'success', 
      // buttons: ['Aceptar']
    });
    await toast.present();
 }

}
