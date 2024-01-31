import { Component, Input } from '@angular/core';
import * as SurveyCore from 'survey-core';
import Inputmask from "inputmask";
import { inputmask } from "surveyjs-widgets";
import { SurveyModule } from "survey-angular-ui";
import { IDocOptions, SurveyPDF } from "survey-pdf";
import { surveyJson } from '../../../assets/pilot.survey.json';
import { themeJson } from '../../../assets/pilot.theme.json';
import "./survey.component.css";
import "survey-core/defaultV2.min.css";
import { Converter } from "showdown";
import { HeaderComponent } from '../header/header.component';
import "survey-core/survey.i18n";
import { SvgRegistry } from "survey-core";


SvgRegistry.registerIconFromSvg('icon-prepareToApply','<svg th:fragment="prepareToApply" aria-hidden="true" width="100" height="75" viewBox="0 0 100 75" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.7894 33.777C20.7392 23.5204 20.2149 12.2543 28.0882 5.59909C36.1615 -1.2251 47.6387 -0.763551 57.9697 1.50406C68.4313 3.80034 78.2399 8.66379 83.7732 17.8218C90.0313 28.1793 93.7695 41.113 88.4755 51.9935C83.1963 62.8436 70.4027 66.2598 58.7169 69.3187C46.3241 72.5628 31.6402 77.9786 22.1853 69.3461C12.945 60.9095 18.6366 46.2261 19.7894 33.777Z" fill="#89ccbb"/><path d="M69.0053 39.2656H33.9932V41.1906H69.0053V39.2656Z" fill="black" fill-opacity="0.5"/><path d="M69.0053 32.7769H33.9932V34.7019H69.0053V32.7769Z" fill="black" fill-opacity="0.5"/><path d="M69.0053 26.2856H33.9932V28.2106H69.0053V26.2856Z" fill="black" fill-opacity="0.5"/><path d="M69.0053 19.7964H33.9932V21.7214H69.0053V19.7964Z" fill="black" fill-opacity="0.5"/><rect x="21.5" y="8.5" width="61" height="48" rx="4.5" fill="white" stroke="black" stroke-width="3"/><rect x="30" y="16" width="44" height="28" rx="3" fill="#D8F2F2"/><line x1="36" y1="21" x2="68" y2="21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="36" y1="27" x2="68" y2="27" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="36" y1="33" x2="68" y2="33" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="36" y1="39" x2="68" y2="39" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="21.5" y1="49.5" x2="82.5" y2="49.5" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><line x1="59.4826" y1="56.7719" x2="61.4826" y2="69.7719" stroke="black" stroke-width="3"/><line x1="45.4826" y1="57.2281" x2="43.4826" y2="70.2281" stroke="black" stroke-width="3"/><line x1="35.5" y1="69.5" x2="67.5" y2="69.5" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0"><rect width="100" height="75" fill="white"/></clipPath></defs></svg>');

inputmask(SurveyCore);


const pdfDocOptions: IDocOptions = { /* ... */ };

const converter = new Converter();

function doMarkdown(survey: any, options: any) {
  var str = converter.makeHtml(options.text);
  // remove root paragraphs <p></p>
  str = str.substring(3);
  str = str.substring(0, str.length - 4);
  // set html
  options.html = str;
};

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [
    SurveyModule,
    HeaderComponent
  ],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css'
})

export class SurveyComponent  {

  @Input() locale!: string;

  surveyModel!: SurveyCore.Model;

  savePdf (sender: any, options: any ) {
    console.log(sender.data);

    const surveyPdf = new SurveyPDF(surveyJson, pdfDocOptions);
    surveyPdf.mode = "display"; //read-only

    surveyPdf.locale = sender.locale;
    console.log("pdf locale:"+ surveyPdf.locale);

    surveyPdf.onTextMarkdown.add(doMarkdown);

    surveyPdf.data = sender.data;
    surveyPdf.save();
  };

  doMarkdown(survey: any, options: any) {
    var str = converter.makeHtml(options.text);
    // remove root paragraphs <p></p>
    str = str.substring(3);
    str = str.substring(0, str.length - 4);
    // set html
    options.html = str;
  };

  ngOnInit() {
    const survey = new SurveyCore.Model(surveyJson);

    //set the markdown renderer
    survey.onTextMarkdown.add(doMarkdown);

    const theme: SurveyCore.ITheme = themeJson as SurveyCore.ITheme;
    survey.applyTheme(theme);

    survey.onComplete.add(this.savePdf);

    this.surveyModel = survey;
  }

  ngOnChanges() {
        //set the current locale
        this.surveyModel.locale = this.locale;
        console.log('ngOnChanges: locale='+ this.surveyModel.locale);    
   }

    /*
  uploadFiles(_: any, options: { files: any[]; }) {
      const formData = new FormData();
      options.files.forEach((file) => {
          formData.append(file.name, file);
      });
                  fetch("https://api.surveyjs.io/private/Surveys/uploadTempFiles", {
                method: "POST",
                body: formData
            })
                .then((response) => response.json())
                .then((data) => {
                    options.callback(
                        "success",
                        options.files.map((file) => {
                            return {
                                file: file,
                                content: "https://api.surveyjs.io/private/Surveys/getTempFile?name=" + data[file.name]
                            };
                        })
                    );
                })
                .catch((error) => {
                    console.error("Error: ", error);
                    options.callback("error");
                });
  }
*/


}

