import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable(
  {providedIn: 'root'} //con esta sentencia no hace falta declarar el servicio dentro del module.ts pero en el video habla de que la otra forma permite que se instancie una unica vez el servicio
)
export class SpotifyService {
  token:string='Bearer BQAjDV0DQNsKKiOr5sHoVogkfg3KrITfzuFyx0iyOrqMwP7n4J8TRMnX0U_CGA9fk-jAH6jyAvrGeGSMJfRa15rHZK3dU2Hl1NmkyprPjDJxs0GpTr93zLVspQudJ_xPAcHRmBSyqPUr9VW8ae0'
  constructor(private http:HttpClient) {
    console.log('servicio listo');

  }

  getQuery(query:string){
    const headers= new HttpHeaders({ //para describir los requisitos solicitados por API, como el Token
      'Authorization':this.token
    });
    const url=`https://api.spotify.com/v1/${query}`;
    return this.http.get(url, {headers})
  }
  getNewReleases(){
    return this.getQuery('browse/new-releases').pipe(map(data=>data['albums'].items));
                        //agregar ?limit=numero de registros a obtener en caso de querer mas
    //return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers}).pipe(map(data=>data['albums'].items)); REQUEST COMPLETO SIN OPTIMIZAR. el pipe y el map son funciones todo para que filtre los datos... pq la api te devuelve objeto con 80 mil cosas
  }
  getArtistas(artistas: string){
    return this.getQuery(`search?q=${artistas}&type=artist&offset=0`).pipe(map(data=>data['artists'].items))
    // return this.http.get(`https://api.spotify.com/v1/search?q=${artista}&type=artist&offset=0`, {headers}).pipe(map(data=>data['artists'].items))
  }
  getArtista(id:string){
    return this.getQuery(`artists/${id}`)
  }
  getTopTrack(id: string){
    return  this.getQuery(`artists/${id}/top-tracks?country=AR`).pipe(map(data=>data['tracks']))
  }
}
