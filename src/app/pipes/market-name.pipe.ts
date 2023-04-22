import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marketName'
})
export class MarketNamePipe implements PipeTransform {
  markets = [
    { id: 'amazon_price', name: 'Amazon'},
    { id: 'cardmarket_price', name: 'Cardmarket'},
    { id: 'coolstuffin_price', name: 'Coolstuff Inc'},
    { id: 'ebay_price', name: 'Ebay'},
    { id: 'tcgplayer_price', name: 'TCG player'},
  ]
  transform(value: string): string {
    // si el valor encontrado es igual al id se almacena dentro de market
    const market = this.markets.find( m => m.id === value)
    return market?.name || '';
  }

}
