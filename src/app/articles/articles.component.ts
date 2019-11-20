import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.sass'],
})
export class ArticlesComponent {
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'French' },
    { code: 'ru', label: 'Russian' },
  ];
}
