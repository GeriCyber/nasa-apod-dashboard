import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbLayoutModule,
  NbThemeModule,
  NbToastrModule,
  NbTooltipModule,
} from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailCardComponent } from './components';
import { DashboardComponent, DetailComponent } from './pages';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailCardComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbCardModule,
    NbLayoutModule,
    NbEvaIconsModule,
    FlexLayoutModule,
    NbTooltipModule,
    NbButtonModule,
    NbIconModule,
    NbToastrModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
