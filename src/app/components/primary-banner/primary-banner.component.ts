import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-primary-banner',
  templateUrl: './primary-banner.component.html',
  styleUrls: ['./primary-banner.component.css']
})
export class PrimaryBannerComponent implements OnInit {
  @Input() tagline;
  @Input() title;
  @Input() showActionButton;
  constructor() { }

  ngOnInit(): void {
  }

}
