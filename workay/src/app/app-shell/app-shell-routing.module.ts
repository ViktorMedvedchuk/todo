import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppShellComponent } from './app-shell.component';
import { HomeComponent } from '../components/home/home.component';

const routes: Routes = [
  { path: '', component: AppShellComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'login', loadChildren: './components/login/login.module#LoginModule' },
      { path: 'categories', loadChildren: './components/categories/categories.module#CategoriesModule' }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppShellRoutingModule { }
