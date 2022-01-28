import { Component, OnInit } from '@angular/core';
import {Alertes} from "../../data/datas";

@Component({
  selector: 'app-alertes',
  templateUrl: './alertes.component.html',
  styleUrls: ['./alertes.component.css']
})
export class AlertesComponent implements OnInit {
  public alertes = Alertes ;

  constructor() {}
  ngOnInit(): void {}

}
