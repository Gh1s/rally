import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ComptesComponent} from "./components/comptes/comptes.component";
import {FacturesComponent} from "./components/factures/factures.component";
import {BudgetsComponent} from "./components/budgets/budgets.component";
import {SettingsComponent} from "./components/settings/settings.component";
import {LoginComponent} from "./components/login/login.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {AppbarComponent} from "./components/appbar/appbar.component";

const routes: Routes = [
  { path: 'home', component:  AppbarComponent},
  { path: 'comptes', component:  ComptesComponent},
  { path: 'factures', component:  FacturesComponent},
  { path: 'budgets', component:  BudgetsComponent},
  { path: 'settings', component:  SettingsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signin', component:  SignInComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
