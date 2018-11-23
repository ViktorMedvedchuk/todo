import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppShellRoutingModule } from './app-shell-routing.module';
import { AppShellComponent } from './app-shell.component';
import { MaterialModule } from '../modules/material.module';


@NgModule({
  declarations: [
    AppShellComponent
  ],
  imports: [
    CommonModule,
    AppShellRoutingModule,
    MaterialModule

  ],
  exports: [
    AppShellComponent
  ]

})
export class AppShellModule { }
