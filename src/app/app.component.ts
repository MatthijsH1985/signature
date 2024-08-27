import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormComponent} from './form/form.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    FormsModule,
    FormComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'signature-tool';
  formValues: any = {};
  constructor() {

  }
  handleFormValuesChange(values: any) {
    this.formValues = values;
  }
  copyToClipboard() {
    const element = document.getElementById('signature');

    if (element) {
      const htmlContent = element.innerHTML;
      const fullHtml = `
        <!DOCTYPE html>
        <html lang="nl">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Handtekening van Befo</title>
        </head>
        <body>
            ${htmlContent}
        </body>
        </html>
      `;

      if (navigator.clipboard && window.ClipboardItem) {
        const blob = new Blob([fullHtml], { type: 'text/html' });
        const data = [new ClipboardItem({ 'text/html': blob })];

        navigator.clipboard.write(data).then(() => {
          console.log('HTML gekopieerd naar klembord!');
        }).catch(err => {
          console.error('Fout bij het kopiëren van HTML naar het klembord: ', err);
        });
      } else {
        console.warn('ClipboardItem API wordt niet ondersteund in deze browser.');
      }
    }
  }


}
