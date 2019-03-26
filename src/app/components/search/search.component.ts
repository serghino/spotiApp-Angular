import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent{
  artists: any[] = [];
  loading: boolean;

  //var Error
  messageerror: string;
  error: boolean;
  constructor(private spotify: SpotifyService) { 
    this.error = false;
  }
  search(data: string){
    this.loading = true;
    if(data){
        this.spotify.getartists(data).subscribe((data:any) => {
        this.artists = data;
        this.loading = false;
      },(e)=>{
        this.error = true;
        this.messageerror = e.error.error.message;
        this.loading = false;
      });
    }else {
      this.loading = false;
    }
  }
}
