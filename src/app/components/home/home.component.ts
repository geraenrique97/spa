import { Component, OnInit } from '@angular/core';
// este es el script que permite realizar una consulta a API, en module.ts va a estar el modulo de este escrip (httpclientmodule)

import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  newReleases: any[]=[];
  cargando:boolean;
  constructor(private spotifyservice:SpotifyService) {

    // con get realiza la solicitud a una pagina, con subscribe nos subscribimos a los cambios que el servidor pueda realizar, actualizando nuestros datos
    // this.http.get('https://restcountries.eu/rest/v2/lang/es')
    // .subscribe(
    //   (all: any)=>this.paises=all
    // );
    this.cargando=true;
    this.spotifyservice.getNewReleases().subscribe(
      (data:any)=> {console.log(data);
      this.newReleases=data;
      this.cargando=false;
    });


  }

  ngOnInit() {
  }

}
