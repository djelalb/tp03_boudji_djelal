import { Component } from '@angular/core';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { SearchComponent } from './components/search/search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CatalogueComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
