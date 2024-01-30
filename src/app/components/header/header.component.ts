import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'], // Corrected property name
})
export class HeaderComponent {
  @Output() localeChanged = new EventEmitter<string>();

  changeLocale(locale: string): void {
    this.localeChanged.emit(locale);
  }
}
