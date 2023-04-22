import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../interfaces/card.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  API_URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php' ;
  constructor(private http: HttpClient) {}
  // obtiene cartas mandando el nombre y la cantidad
  getCards (cardName : string | null, offset = 0) {
    const params: any = {
      num: 100,
      offset,
    };
    if (cardName) params.fname = cardName;
    return this.http
    .get<Card[]>(this.API_URL, {params})
    .pipe(map( (res: any) => res.data ));
  }

  getCard (id : string) {
    const params = {id}
    return this.http.get(this.API_URL, {params}).pipe(
      map((res: any) => res.data[0])
    )
  }
}
