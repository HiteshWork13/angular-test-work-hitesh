import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
    // console.log("data", this.data);
    // this.data.subscribe(result=> {

    // })
  }

  changeDataInParent(item: any) {
    // this.data
  }
}
