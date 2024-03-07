import { Component } from '@angular/core';

import { ServiajaxService } from '../serviajax.service'

@Component({
  selector: 'app-botonajax',
  templateUrl: './botonajax.component.html',
  styleUrl: './botonajax.component.css'
})
export class BotonajaxComponent {

  constructor(private serviAjax: ServiajaxService ) { }

  llamaAjaxC():void{
    this.serviAjax.llamaAjax('http://localhost/dwec/tema_15/actividades/15.4_ajax/src/jsonGET.php?nombre=David&ciudad=Ubrique')
      .subscribe(data=> {
      var i:HTMLElement|null=document.getElementById('datos');
      if(i!=null){
          i.innerHTML=`Desde servidor ${data['nombre']} de ${data['ciudad']}`
      };              
    });
  }


}
