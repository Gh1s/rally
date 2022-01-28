import { Component, OnInit } from '@angular/core';
import {Budgets} from "../../data/datas";

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.css']
})
export class BudgetsComponent implements OnInit {
  public budgets = Budgets ;

  constructor() {}
  ngOnInit(): void {}

  getTotalCost() {
    return this.budgets.map(t => t.amount).reduce((acc, value) => acc + value, 0);
  }

}
