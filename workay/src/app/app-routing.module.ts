import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppShellComponent } from './app-shell/app-shell.component';

const routes: Routes = [
  { path: '', component: AppShellComponent },
  { path: 'login', loadChildren: './components/login/login.module#LoginModule' },
  { path: 'categories', loadChildren: './components/categories/categories.module#CategoriesModule' },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'workay-shell-path', component: AppShellComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
