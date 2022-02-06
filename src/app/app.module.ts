import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { HeaderComponent } from './header/header.component';
import { WidgetOnlyContextComponent } from './widget/widget-only-context/widget-only-context.component';
import { WidgetTextImageComponent } from './widget/widget-text-image/widget-text-image.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    HeaderComponent,
    WidgetOnlyContextComponent,
    WidgetTextImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
