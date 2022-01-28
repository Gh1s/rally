import { Component, OnInit } from '@angular/core';
import {Factures} from "../../data/datas";

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css']
})
export class FacturesComponent implements OnInit {
  public factures = Factures ;

  constructor() {}
  ngOnInit(): void {}

  getTotalCost() {
    return this.factures.map(t => t.amount).reduce((acc, value) => acc + value, 0);
  }

}
