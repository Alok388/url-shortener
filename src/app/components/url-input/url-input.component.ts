import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { UrlShortenerService } from 'src/app/service/url-shortener.service';

@Component({
  selector: 'app-url-input',
  templateUrl: './url-input.component.html',
  styleUrls: ['./url-input.component.css']
})
export class UrlInputComponent {

  url: string = '';
  shortenedLink: string = '';
  secondShortenedLink: string = '';
  
  constructor(
    private urlShortenerService: UrlShortenerService,
    private router: Router
  ) {}

  shortenUrl() {
    this.urlShortenerService.shortenUrl(this.url).subscribe(
      (response: any) => {
        if (response) {
          this.shortenedLink =  response.result.short_link
          this.secondShortenedLink= response.result.short_link2
         
        }
      },
      (error:any) => {
        console.error('Error:', error);
      }
    );
  }



}
