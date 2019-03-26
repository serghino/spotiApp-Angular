import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getQuery(query: string){
    const url = `${environment.apiSpotifyUrl}${ query }`;
    const headers = new HttpHeaders({
      Authorization : 'Bearer BQBGtvOFfpxS799YS7cnGrnx1fTvrM184ip_fJdYZ94oCIuvPpDBuFpGjY-C6zwDaHsk9mtORiOWnhhhdT0'
    });
    return this.http.get(url, {headers});
  }
  getNewReleases(): any{
    return this.getQuery('browse/new-releases?limit=20').pipe( map(data => data['albums'].items));
  }

  getartists(search: string){
    return this.getQuery(`search?q=${search}&type=artist&limit=5`).pipe(map(data => data['artists'].items));
  }

  getartist(id: string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map(data => data['tracks']));
  }
}
