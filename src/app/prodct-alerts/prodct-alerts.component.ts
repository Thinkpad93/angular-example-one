import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-prodct-alerts',
  templateUrl: './prodct-alerts.component.html',
  styleUrls: ['./prodct-alerts.component.css']
})
export class ProdctAlertsComponent implements OnInit {

  @Input() product;

  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
