import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent implements OnInit {
  constructor(private _listaDeseos: ListaDeseosService) {  }

  ngOnInit() {
    console.log('init pendientes');
  }
}
