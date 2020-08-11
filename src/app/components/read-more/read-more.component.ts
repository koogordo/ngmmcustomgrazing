import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent implements OnInit, OnDestroy {
  @Input() readMoreCtx;
  @Output() exited: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.readMoreCtx);
  }
  ngOnDestroy(): void {
    this.exited.complete();
  }
  onExited(): void {
    this.exited.emit(true);
  }
}
