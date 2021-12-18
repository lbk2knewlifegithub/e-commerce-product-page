import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import {
  CartComponent,
  CartItemPreviewComponent,
  CartPopupComponent,
  DrawerComponent,
  FooterComponent,
  HeaderComponent,
  ItemPreviewComponent
} from './components';
import { ProfileComponent } from './components/profile.component';
import { AppComponent } from './containers/app.component';
import { CartEffects } from './effects';

const COMPONENTS = [
  FooterComponent,
  HeaderComponent,
  CartComponent,
  ProfileComponent,
  DrawerComponent,
  CartPopupComponent,
  CartItemPreviewComponent,
  ItemPreviewComponent,
];
const CONTAINERS = [AppComponent];

@NgModule({
  imports: [CommonModule, RouterModule, EffectsModule.forFeature([CartEffects])],
  declarations: [COMPONENTS, CONTAINERS],
})
export class CoreModule {}
