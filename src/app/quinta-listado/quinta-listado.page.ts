import { Component, OnInit } from '@angular/core';
import { CrudService } from '../quinto/crud.service';


@Component({
  selector: 'app-quinta-listado',
  templateUrl: './quinta-listado.page.html',
  styleUrls: ['./quinta-listado.page.scss'],
})
export class QuintaListadoPage implements OnInit {
  persona : any = [ ]

  constructor(
    private crudService: CrudService
  ) { }

  ngOnInit() {
    this.persona= this.crudService.lista().
    then(data => {
      this.persona = data
      });
  }


}
