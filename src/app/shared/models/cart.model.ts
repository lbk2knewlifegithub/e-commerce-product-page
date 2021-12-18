import { Item } from './item.model';

export interface Cart {
  timestamp: number;
  items: { [key: number]: Item };
}
