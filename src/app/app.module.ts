import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ImagesModule } from './images/images.module';
import { UiModule } from './ui/ui.module';
import { ArticlesComponent } from './articles/articles.component';
import { TranslatePipeModule } from './ui/pipes/translate.pipe.module';

@NgModule({
  declarations: [AppComponent, ArticlesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ImagesModule, UiModule, TranslatePipeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
