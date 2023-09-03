import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { configuration } from './configuration';

@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {


  constructor(private http: HttpClient) {
  }

  shortenUrl(url: string) {
    let path="/shorten"
    return this.http.get(`${configuration.BASE_URL + path}?url=${url}`);
  }
}
