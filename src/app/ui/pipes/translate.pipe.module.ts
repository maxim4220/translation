import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from './translate.pipe';
import { TranslateService } from '../../images/services/translate.service';
import { setupTranslateFactory } from './setupTranslateFactory';

@NgModule({
    declarations: [TranslatePipe],
    exports: [TranslatePipe],
    imports: [CommonModule,],
    providers: [
        TranslateService,
        {
            provide: APP_INITIALIZER,
            useFactory: setupTranslateFactory,
            deps: [TranslateService],
            multi: true
        }
    ]
})
export class TranslatePipeModule { }
