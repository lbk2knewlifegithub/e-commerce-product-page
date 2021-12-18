import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  AddToCardComponent,
  ArrowButtonComponent,
  CarouselComponent, CarouselThumbnailsComponent, PriceComponent,
  QuantityComponent
} from './components';
import { ViewProductPageComponent } from './containers';
import { ProductRoutingModule } from './product-routing.module';

const COMPONENTS = [
  QuantityComponent,
  CarouselComponent,
  ArrowButtonComponent,
  PriceComponent,
  AddToCardComponent,
  CarouselThumbnailsComponent,
];
const CONTAINERS = [ViewProductPageComponent];

@NgModule({
  imports: [CommonModule, ProductRoutingModule],
  declarations: [COMPONENTS, CONTAINERS],
})
export class ProductModule {}
