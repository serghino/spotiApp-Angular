import { Component, OnInit } from '@angular/core';
//received date from tarjetas.component
import { ActivatedRoute  } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.sass']
})
export class ArtistComponent {
  myartist : any = {};
  topTrack: any[] = [];
  loadingArtist: boolean;
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loadingArtist = true;
    this.router.params.subscribe(params => {
      this.getInfoArtist(params['id']);
      this.getTopTracks(params['id']);
    });
   }

   getInfoArtist(id: string){
    this.loadingArtist = true;
    this.spotify.getartist(id).subscribe((artist)=>{
      this.myartist = artist;
      this.loadingArtist = false;
    });
   }

   getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe((tracks)=>{
      this.topTrack = tracks;
    });
   }


}
