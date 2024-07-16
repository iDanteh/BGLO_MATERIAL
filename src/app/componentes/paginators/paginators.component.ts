import {Component} from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-paginators',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './paginators.component.html',
  styleUrl: './paginators.component.css'
})
export class PaginatorsComponent {

}
