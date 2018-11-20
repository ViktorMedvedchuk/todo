import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  defaultLanguage = 'uk';
  supportedLanguages = ['uk', 'ru', 'en'];

  constructor() { }
}
