import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './modules/app-routing.module';
import { ToolbarModule } from './modules/toolbar/toolbar.module';
import { CollectionsModule } from './modules/collections/collections.module';
import { GaleryModule } from './modules/galery/galery.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToolbarModule,
    CollectionsModule,
    GaleryModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
