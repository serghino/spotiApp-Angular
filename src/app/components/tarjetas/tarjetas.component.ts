import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.sass']
})
export class TarjetasComponent{

  @Input() items: any[] = [];
  constructor(private router: Router) { }

  getArtist(item: any){
    let artitsId;

    if(item.type === 'artist'){
      artitsId = item.id;
    }
    else{
      artitsId = item.artists[0].id;
    }
    this.router.navigate(['/artist', artitsId]);
    
  }


}
