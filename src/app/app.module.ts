import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConditionalContentProjectionComponent } from './feature/conditional-content-projection/conditional-content-projection.component';
import { NotFoundComponent } from './shared/ui/not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, ConditionalContentProjectionComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, ClarityModule, NotFoundComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
