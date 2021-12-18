import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  AddToCardComponent,
  ArrowButtonComponent,
  CarouselComponent,
  PriceComponent,
  QuantityComponent
} from './components';
import { ProductPageComponent } from './containers';
import { ProductRoutingModule } from './product-routing.module';

const COMPONENTS = [
  QuantityComponent,
  CarouselComponent,
  ArrowButtonComponent,
  PriceComponent,
  AddToCardComponent,
];
const CONTAINERS = [ProductPageComponent];

@NgModule({
  imports: [CommonModule, ProductRoutingModule],
  declarations: [COMPONENTS, CONTAINERS],
})
export class ProductModule {}
