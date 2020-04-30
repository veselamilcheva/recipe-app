import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() showPage = new EventEmitter<string>();
  isCollapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(page: string) {
    this.showPage.emit(page);
  }

}
