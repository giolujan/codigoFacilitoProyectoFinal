import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  API_URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php' ;
  constructor(private http: HttpClient) {}
  getCard () {
    return this.http.get<Card[]>(this.API_URL)
  }
}
