import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CartComponent,
  DrawerComponent,
  FooterComponent,
  HeaderComponent
} from './components';
import { ProfileComponent } from './components/profile.component';
import { AppComponent } from './containers/app.component';

const COMPONENTS = [
  FooterComponent,
  HeaderComponent,
  CartComponent,
  ProfileComponent,
  DrawerComponent,
];
const CONTAINERS = [AppComponent];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [COMPONENTS, CONTAINERS],
})
export class CoreModule {}
