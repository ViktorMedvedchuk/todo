import { Component } from '@angular/core';
import { I18nService } from './core/services/i18n.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  param = {value: 'world'};

  constructor(translate: I18nService) {
    translate.language = '';

  }
}
