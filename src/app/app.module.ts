import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertesComponent } from './components/alertes/alertes.component';
import { FacturesComponent } from './components/factures/factures.component';
import { ComptesComponent } from './components/comptes/comptes.component';
import { BudgetsComponent } from './components/budgets/budgets.component';
import { AppbarComponent } from './components/appbar/appbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import { SettingsComponent } from './components/settings/settings.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    AlertesComponent,
    FacturesComponent,
    ComptesComponent,
    BudgetsComponent,
    AppbarComponent,
    LoginComponent,
    SignInComponent,
    SettingsComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
