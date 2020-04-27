import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadedPage = 'recipe';

  onNavigate(page: string) {
    this.loadedPage = page;
  }
}
