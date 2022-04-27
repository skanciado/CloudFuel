import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavegatePage } from './navigate.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { NavigatePageRoutingModule } from './navigate-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    GoogleMapsModule,
    RouterModule.forChild([{ path: '', component: NavigatePageModule }]),
    NavigatePageRoutingModule,
  ],
  declarations: [NavegatePage],
})
export class NavigatePageModule {}
