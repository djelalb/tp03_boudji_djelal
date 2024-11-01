import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: string = '';
  searchCategory: string = '';

  @Output() searchEvent = new EventEmitter<any>();

  search() {
    this.searchEvent.emit({
      term: this.searchTerm,
      category: this.searchCategory
    });
  }

  reset() {
    this.searchTerm = '';
    this.searchCategory = '';
    this.search();
  }
}
