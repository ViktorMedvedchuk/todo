import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellComponent } from './app-shell.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    AppShellComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    AppShellComponent
  ]
})
export class AppShellModule { }
