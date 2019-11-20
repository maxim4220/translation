import { TranslateService } from '../../images/services/translate.service';
export function setupTranslateFactory(service: TranslateService): () => void {
  return () => service.use('en');
}
