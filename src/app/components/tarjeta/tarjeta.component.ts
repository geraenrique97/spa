import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
  @Input() items: any[];
  constructor(private router:Router) { }

  verArtista(item:any){
    this.router.navigate(['artista',this.getIdArtista(item)])

  }
  getIdArtista(item: any){

    let idArtista:string;
    if (item['type']=='artist') {
      idArtista=item['id'];
    }else{
      idArtista=item.artists[0].id;
    };
    return idArtista

  }

}
