import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Card } from 'src/app/interfaces/card.interface';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  //capturar un id
  id! : string;
  card$! : Observable<Card>;
  constructor(private route: ActivatedRoute, private cardService: CardService) { }

  ngOnInit(): void {
    //toma captura del id presente
    this.id = this.route.snapshot.paramMap.get('id') || '';
    //recibe la informacion del id
    this.card$ = this.cardService.getCard(this.id);
  }

}
