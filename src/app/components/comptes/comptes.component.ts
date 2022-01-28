import { Component, OnInit } from '@angular/core';
import {Comptes} from "../../data/datas";

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.css']
})
export class ComptesComponent implements OnInit {
  public comptes = Comptes ;

  constructor() {}
  ngOnInit(): void {}

  getTotalCost() {
    return this.comptes.map(t => t.amount).reduce((acc, value) => acc + value, 0);
  }

}
