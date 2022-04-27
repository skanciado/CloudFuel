import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavegatePage } from './navigate.page';

const routes: Routes = [
  {
    path: '',
    component: NavegatePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavigatePageRoutingModule {}
