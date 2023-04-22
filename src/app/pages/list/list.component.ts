import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Card } from 'src/app/interfaces/card.interface';
import { CardService } from 'src/app/services/card.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  cards: Card[] = [];
  offset = 0;

  //form control module, captura el texto
  cardTextFC = new FormControl('')
  constructor(private cardService: CardService) { }

  ngOnInit(): void {

    //recoge la data despues de 1000
    this.cardTextFC.valueChanges.pipe(
      debounceTime(1000)
    )
    //es un observable, se visualiza los cambios en la busqueda
    .subscribe(res => {
      console.log(res);
      //tarjetas vacias
      this.cards = [];
      //busca las coincidencias en la data
      this.searchCards(res);
    });
    this.searchCards();
  }

  onScroll() {
    console.log("scrolled!!");
    this.offset += 100;
    this.searchCards();
  }
  //carga las tarjetas
  searchCards(cardName: string | null = null) {
    this.cardService.getCards(cardName, this.offset).subscribe(res => {
      console.log(res);
      this.cards = [...this.cards, ...res];
    });
  }
}
