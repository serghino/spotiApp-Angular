import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alertmessages',
  templateUrl: './alertmessages.component.html',
  styleUrls: ['./alertmessages.component.sass']
})
export class AlertmessagesComponent implements OnInit {
  @Input() message: string;
  @Input() error: any;
  constructor() { }

  ngOnInit() {
  }

}
