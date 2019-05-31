import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})

export class ArtistaComponent{
  idArtista: string;
  artista:any[];
  cargando: boolean;
  topTrack: any[];
  constructor(private routes: ActivatedRoute, private spotify:SpotifyService, private router:Router) {
    this.cargando=true;
    this.routes.params.subscribe(params=>{
      this.idArtista=params['id'];
    });
    this.spotify.getArtista(this.idArtista).subscribe(
      (artista:any)=>{
        console.log(artista);
        this.artista=artista;
      });
    this.cargando=false;
    this.spotify.getTopTrack(this.idArtista).subscribe((data:any)=>
      {this.topTrack=data;

      console.log(data)
    })
  }

  volver(){
    this.router.navigate(['home'])
  }

}
