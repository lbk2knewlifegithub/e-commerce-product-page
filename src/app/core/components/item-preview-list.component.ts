import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Item } from 'src/app/shared/models';

@Component({
  selector: 'lbk-item-preview-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <ng-container *ngFor="let item of items; trackBy: identifyItem">
        <lbk-item-preview
          (delete)="delete.emit(item)"
          [item]="item"
        ></lbk-item-preview>
      </ng-container>
    </div>
  `,
})
export class ItemPreviewComponent {
  @Input() items!: Item[];
  @Output() delete = new EventEmitter<Item>();

  identifyItem(index: number, item: Item): number {
    return item.id;
  }
}
