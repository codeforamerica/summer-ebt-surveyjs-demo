import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @Output() localeChanged = new EventEmitter<string>();

  changeLocale(locale: string) {
    this.localeChanged.emit(locale);
  }
}
