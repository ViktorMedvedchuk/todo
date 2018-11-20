import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { TranslateService } from '@ngx-translate/core';
import { includes } from 'lodash';
import { ConfigurationService } from './configuration.service';

const languageKey = 'language';

@Injectable({
  providedIn: 'root'
})

export class I18nService {

supportedLanguages: string[] = this.configurationService.supportedLanguages;
defaultLanguage: string = this.configurationService.defaultLanguage;

  constructor(private translateService: TranslateService,
              private configurationService: ConfigurationService
    ) {}

  set language(language: string) {
    language = language || localStorage.getItem(languageKey) || this.translateService.getBrowserCultureLang();
    let isSupportedLanguage = includes(this.supportedLanguages, language);

    // If no exact match is found, search without the region
    if (language && !isSupportedLanguage) {
      language = language.split('-')[0];
      language = this.supportedLanguages.find(supportedLanguage => supportedLanguage.startsWith(language)) || '';
      isSupportedLanguage = Boolean(language);
    }

    // Fallback if language is not supported
    if (!isSupportedLanguage) {
      language = this.defaultLanguage;
    }

    this.translateService.use(language);
  }

  get language(): string {
    return this.translateService.currentLang;
  }
}
