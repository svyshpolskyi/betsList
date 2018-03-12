import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() itemSelected = new EventEmitter<string>();
  onSelected(selectedItem: string) {
    this.itemSelected.emit(selectedItem);
  }


}
