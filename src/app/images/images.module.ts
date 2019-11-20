import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './images.component';
import { UiModule } from '../ui/ui.module';
import { ImageService } from './services/image.service';
import { TranslatePipeModule } from '../ui/pipes/translate.pipe.module';

@NgModule({
  declarations: [ImagesComponent],
  imports: [CommonModule, UiModule, TranslatePipeModule],
  providers: [
    ImageService,
  ],
})
export class ImagesModule { }
