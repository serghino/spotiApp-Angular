import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent{
  newsongs: any[] = [];
  loading: boolean;
  error: boolean;
  message: string;
  constructor(private spotify:SpotifyService) {
    
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases().subscribe((data:any) => {
        //console.log(data);
        this.newsongs = data;
        this.loading = false;
      },(e)=>{
        this.loading = false;
        this.error = true;
        this.message = e.error.error.message;
      });
  }

}
