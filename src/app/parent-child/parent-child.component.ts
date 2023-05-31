import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentChildComponent implements OnInit {

  data: any = [];
  data$ = new BehaviorSubject<any>([
    { id: 1, name: 'Item 1', description: 'This is Item 1 description.' },
    { id: 2, name: 'Item 2', description: 'This is Item 2 description.' },
  ])

  constructor() {
    this.data$.subscribe(result => {
      this.data = result;
    })
  }

  ngOnInit(): void {
  }

  createNew() {
    this.data.push({ id: 3, name: "abc", description: "this is demo" });
    this.data$.next(this.data)
  }

}
