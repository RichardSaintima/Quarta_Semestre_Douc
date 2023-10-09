import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private storage: Storage
  ) {
    this.storage.create();
   }

    async guardar(id:string, valor:any){
     return await this.storage.set(id, valor);
    }

    async leer(id:string){
      return await this.storage.get(id);
    }

    async eliminar (id:string) {
      await this.storage.remove(id);
    } 

    async lista() {
      let listado:any = [];
      await this.storage.forEach((valor, k) => {
        listado.push(valor);
      });
      return listado;
    }
    
}
