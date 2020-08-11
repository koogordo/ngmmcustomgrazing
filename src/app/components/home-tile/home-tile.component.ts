import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-home-tile',
  templateUrl: './home-tile.component.html',
  styleUrls: ['./home-tile.component.css']
})
export class HomeTileComponent implements OnInit, OnDestroy {
  @Input() tileTitle;
  @Input() iconSrc;
  @Output() tileActivated: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {}
  ngOnDestroy(): void
  {
    this.tileActivated.complete();
  }
  onTileActivated(): void {
    this.tileActivated.emit(true);
  }

}
