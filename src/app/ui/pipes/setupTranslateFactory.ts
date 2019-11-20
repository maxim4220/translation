import { TranslateService } from '../../images/services/translate.service';
export function setupTranslateFactory(service: TranslateService): Function {
    return () => service.use('en');
}
