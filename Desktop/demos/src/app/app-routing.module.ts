import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DetailsComponent } from './details/details.component';
import { AddItemsComponent } from './add-items/add-items.component';


const routes: Routes = [
  { path: 'details', component: DetailsComponent },
  { path: 'add-items', component: AddItemsComponent },
  
  { path: '',
  component: DetailsComponent,
  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
