import { Component, Input } from '@angular/core';
import * as SurveyCore from 'survey-core';
import { inputmask } from 'surveyjs-widgets';
import { SurveyModule } from 'survey-angular-ui';
import { IDocOptions, SurveyPDF } from 'survey-pdf';
import { surveyJson } from '../../../assets/pilot.survey.json';
import { themeJson } from '../../../assets/pilot.theme.json';
import './survey.component.css';
import 'survey-core/defaultV2.min.css';
import { Converter } from 'showdown';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import 'survey-core/survey.i18n';
import { SvgRegistry } from 'survey-core';

SvgRegistry.registerIconFromSvg(
  'icon-prepareToApply',
  '<svg th:fragment="prepareToApply" aria-hidden="true" width="100" height="75" viewBox="0 0 100 75" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.7894 33.777C20.7392 23.5204 20.2149 12.2543 28.0882 5.59909C36.1615 -1.2251 47.6387 -0.763551 57.9697 1.50406C68.4313 3.80034 78.2399 8.66379 83.7732 17.8218C90.0313 28.1793 93.7695 41.113 88.4755 51.9935C83.1963 62.8436 70.4027 66.2598 58.7169 69.3187C46.3241 72.5628 31.6402 77.9786 22.1853 69.3461C12.945 60.9095 18.6366 46.2261 19.7894 33.777Z" fill="#89ccbb"/><path d="M69.0053 39.2656H33.9932V41.1906H69.0053V39.2656Z" fill="black" fill-opacity="0.5"/><path d="M69.0053 32.7769H33.9932V34.7019H69.0053V32.7769Z" fill="black" fill-opacity="0.5"/><path d="M69.0053 26.2856H33.9932V28.2106H69.0053V26.2856Z" fill="black" fill-opacity="0.5"/><path d="M69.0053 19.7964H33.9932V21.7214H69.0053V19.7964Z" fill="black" fill-opacity="0.5"/><rect x="21.5" y="8.5" width="61" height="48" rx="4.5" fill="white" stroke="black" stroke-width="3"/><rect x="30" y="16" width="44" height="28" rx="3" fill="#D8F2F2"/><line x1="36" y1="21" x2="68" y2="21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="36" y1="27" x2="68" y2="27" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="36" y1="33" x2="68" y2="33" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="36" y1="39" x2="68" y2="39" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="21.5" y1="49.5" x2="82.5" y2="49.5" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><line x1="59.4826" y1="56.7719" x2="61.4826" y2="69.7719" stroke="black" stroke-width="3"/><line x1="45.4826" y1="57.2281" x2="43.4826" y2="70.2281" stroke="black" stroke-width="3"/><line x1="35.5" y1="69.5" x2="67.5" y2="69.5" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0"><rect width="100" height="75" fill="white"/></clipPath></defs></svg>'
);
SvgRegistry.registerIconFromSvg(
  'icon-documentAndEnvelope',
  '<svg th:fragment="documentAndEnvelope" width="100" height="75" viewBox="0 0 100 75" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g clip-path="url(#clip0_67_638)"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.9188 69.2452C22.4102 66.0322 15.1926 63.244 11.4206 57.0399C7.55331 50.6792 7.73198 42.7951 8.32184 35.3682C8.91953 27.8428 10.0387 19.9886 14.827 14.1501C19.5764 8.35899 27.0699 5.94509 34.233 3.77398C41.1602 1.67438 48.4537 -0.11821 55.4148 1.84812C62.2601 3.78172 67.5159 9.01225 72.0836 14.4658C76.431 19.6563 79.154 25.7624 80.9219 32.302C82.8083 39.2793 84.9367 46.6273 82.6319 53.4828C80.278 60.4846 74.5707 65.8813 68.314 69.8045C62.2824 73.5865 55.2028 75.2429 48.0898 75.1419C41.2647 75.045 35.0374 72.2657 28.9188 69.2452Z" fill="#7AC943"/><path d="M62.7451 5.58673L24.295 5.55811C21.4325 5.55811 19.1114 7.8841 19.1114 10.7612L19.0402 60.7163C19.0331 63.5934 21.3542 65.9337 24.2166 65.9337L62.7451 65.9623C65.6075 65.9623 67.9288 63.6363 67.9288 60.7592L68 10.7612C68 10.7612 68 5.58673 62.7451 5.58673Z" fill="#FFF2FF" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M46.9463 55.0057C46.9463 53.3882 45.743 52.923 44.4471 52.6653L43.7564 52.5365C42.7382 52.3433 42.6598 52.0642 42.6598 51.692C42.6598 51.2053 43.1227 50.9119 43.8988 50.9119C44.8173 50.9119 45.0523 51.3485 45.152 51.6777L45.1591 51.7063C45.273 51.9926 45.5436 52.1644 45.8783 52.1644C45.9637 52.1644 46.042 52.15 46.099 52.1429C46.455 52.0785 46.7113 51.8065 46.7113 51.4845C46.7113 51.4057 46.6971 51.327 46.6686 51.2483C46.4835 50.69 45.9637 49.8026 44.5325 49.6022V48.6432C44.5325 47.8416 43.2081 47.8416 43.2081 48.6432V49.6094C41.6701 49.8384 41.1004 50.8332 41.1004 51.6992C41.1004 53.2737 42.254 53.7103 43.3861 53.9321L44.1337 54.0824C45.1947 54.29 45.3798 54.5476 45.3798 55.0271C45.3798 55.6068 44.86 55.9575 43.9913 55.9575C42.8663 55.9575 42.6314 55.478 42.4818 54.9341C42.3893 54.6335 42.1044 54.4403 41.7555 54.4403C41.6772 54.4403 41.6202 54.4474 41.5419 54.4617L41.5206 54.4689C41.1574 54.5476 40.9153 54.8196 40.9153 55.1416C40.9153 55.206 40.9295 55.2561 40.9367 55.2991L40.9509 55.3492C41.1147 55.8716 41.4778 57.0167 43.2793 57.2744V58.2835C43.2793 58.6843 43.6139 58.8918 43.9415 58.8918C44.269 58.8918 44.6037 58.6843 44.6037 58.2835V57.2959C46.0207 57.0955 46.9463 56.2295 46.9463 55.0057Z" fill="#FFF2FF"/><path d="M35.7069 31.4307H58.6243" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M35.7069 41.8481H58.6243" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M31.1334 29.5107H27.3738V33.2896H31.1334V29.5107Z" fill="#FFF2FF" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M31.1334 39.9272H27.3738V43.7061H31.1334V39.9272Z" fill="#FFF2FF" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M35.7069 21.1777H58.6243" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M31.1334 19.0933H27.3738V22.8721H31.1334V19.0933Z" fill="#FFF2FF" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M55.7652 9.8195L22.0482 9.79199C19.2984 9.79199 17.0684 12.0266 17.0684 14.7905L17 62.7821C16.9932 65.5461 19.2231 67.7944 21.973 67.7944L58.9871 67.8219C61.737 67.8219 63.967 65.5874 63.967 62.8234L64.0354 18.2627L55.7652 9.8195Z" fill="white"/><path d="M55.7652 18.2636L55.7652 9.8195L63.967 18.2636H55.7652Z" fill="white"/><path d="M55.7652 9.8195L22.0482 9.79199C19.2984 9.79199 17.0684 12.0266 17.0684 14.7905L17 62.7821C16.9932 65.5461 19.2231 67.7944 21.973 67.7944L58.9871 67.8219C61.737 67.8219 63.967 65.5874 63.967 62.8234L64.0354 18.2627L55.7652 9.8195ZM55.7652 9.8195L55.7652 18.2636H63.967L55.7652 9.8195Z" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M33.0122 34.6489H55.0288" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M25.0059 49.8169L55.0285 49.8169" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M25.0059 42.8115L55.0285 42.8115" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M25.0059 56.8223L55.0285 56.8223" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M28.6177 32.8037H25.0059V36.434H28.6177V32.8037Z" fill="#FFF5FF" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M33.0122 24.7983H55.0288" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M28.6177 22.7959H25.0059V26.4262H28.6177V22.7959Z" fill="#FFF5FF" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M38.0327 49L38 73.9107L83.9673 74L84 49.0893L38.0327 49Z" fill="#FFF7E3" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M38 49L61.5 60L83 49" stroke="black" stroke-width="3" stroke-linejoin="round"/></g><defs><clipPath id="clip0_67_638"><rect width="100" height="75" fill="white"/></clipPath></defs></svg>'
);

inputmask(SurveyCore);

const pdfDocOptions: IDocOptions = {
  /* ... */
};

const converter = new Converter();

function doMarkdown(survey: any, options: any) {
  var str = converter.makeHtml(options.text);
  // remove root paragraphs <p></p>
  str = str.substring(3);
  str = str.substring(0, str.length - 4);
  // set html
  options.html = str;
}

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [SurveyModule, HeaderComponent, FooterComponent],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.css',
})
export class SurveyComponent {
  @Input() locale!: string;

  surveyModel!: SurveyCore.Model;

  savePdf(sender: any, options: any) {
    console.log(sender.data);

    const surveyPdf = new SurveyPDF(surveyJson, pdfDocOptions);
    surveyPdf.mode = 'display'; //read-only

    surveyPdf.locale = sender.locale;
    console.log('pdf locale:' + surveyPdf.locale);

    surveyPdf.onTextMarkdown.add(doMarkdown);

    surveyPdf.data = sender.data;
    surveyPdf.save();
  }

  doMarkdown(survey: any, options: any) {
    var str = converter.makeHtml(options.text);
    // remove root paragraphs <p></p>
    str = str.substring(3);
    str = str.substring(0, str.length - 4);
    // set html
    options.html = str;
  }

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
    console.log('ngOnChanges: locale=' + this.surveyModel.locale);
  }
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
