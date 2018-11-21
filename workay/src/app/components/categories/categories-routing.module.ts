import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './categories.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: '0', component: CategoryDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
