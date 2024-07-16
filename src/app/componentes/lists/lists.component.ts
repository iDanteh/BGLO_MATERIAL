import {Component} from '@angular/core';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
