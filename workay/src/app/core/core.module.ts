import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationService } from './services/configuration.service';
import { I18nService } from './services/i18n.service';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule

  ],
  providers: [
    I18nService,
    ConfigurationService,
  ]
})
export class CoreModule { }
