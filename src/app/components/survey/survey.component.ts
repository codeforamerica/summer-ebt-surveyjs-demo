import { Component, Input } from '@angular/core';
import * as SurveyCore from 'survey-core';
import Inputmask from 'inputmask';
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
  activePanelId: string | null = null;

  surveyModel!: SurveyCore.Model;

  savePdf(sender: any, options: any) {
    console.log('savePdf start');

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

    // Set the markdown renderer
    survey.onTextMarkdown.add(doMarkdown);

    const theme: SurveyCore.ITheme = themeJson as SurveyCore.ITheme;
    survey.applyTheme(theme);

    // Listen to panel changes
    survey.onAfterRenderPanel.add((survey, options) => {
      this.activePanelId = options.panel.id;
      this.updatePanelStyles();
    });

    // Update panel styles when a question is rendered (in case of single question panels)
    survey.onAfterRenderQuestion.add((survey, options) => {
      if (options.question['panel']) {
        this.activePanelId = options.question['panel'].id;
        this.updatePanelStyles();
      }
    });

    survey.onComplete.add(this.savePdf);

    this.surveyModel = survey;
  }

  // Function to update panel styles based on the active panel

  ngOnChanges() {
    //set the current locale
    this.surveyModel.locale = this.locale;
    console.log('ngOnChanges: locale=' + this.surveyModel.locale);
  }
  private updatePanelStyles() {
    // Clear active styles from all panels
    document.querySelectorAll('.sd-panel').forEach((panel) => {
      panel.classList.remove('active-panel');
    });

    // Apply active styles to the current active panel
    if (this.activePanelId) {
      const activePanel = document.getElementById(this.activePanelId);
      if (activePanel) {
        activePanel.classList.add('active-panel');
      }
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
}
