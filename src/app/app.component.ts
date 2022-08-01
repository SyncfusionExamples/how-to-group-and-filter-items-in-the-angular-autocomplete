import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-autocomplete';
  public exampleData : string[] = [
        'Águilas',
        'Ajedrez',
        'Ala Delta',
        'Álbumes de Música',
        'Alusivos',
        'Análisis de Escritura a Mano',
        'Dyarbakır',
        'Derepazarı ',
        'Gülümsemek ',
        'Teşekkürler',
        'Güle güle.',
        'Gülhatmi',
        'Gülünç'
  ];
  public autocompleteFilterType : string = "Contains";
  public dataFields: Object = { value: 'Name', groupBy: 'Category'};
  public localData: Object[] = [
    { Name: 'Cabbage', Category: 'Leafy and Salad', Id: 'item1' },
    { Name: 'Spinach', Category: 'Leafy and Salad', Id: 'item2' },
    { Name: 'Wheat grass', Category: 'Leafy and Salad', Id: 'item3' },
    { Name: 'Yarrow', Category: 'Leafy and Salad', Id: 'item4' },
    { Name: 'Pumpkins', Category: 'Leafy and Salad', Id: 'item5' },
	  { Name: 'Garden Rocket', Category: 'Leafy and Salad', Id: 'item6' },
    { Name: 'Chickpea', Category: 'Beans', Id: 'item7' },
    { Name: 'Green bean', Category: 'Beans', Id: 'item8' },
    { Name: 'Garlic', Category: 'Bulb and Stem', Id: 'item9' },
    { Name: 'Nopal', Category: 'Bulb and Stem', Id: 'item10' },
    { Name: 'Onion', Category: 'Bulb and Stem', Id: 'item11' }
  ];
}
