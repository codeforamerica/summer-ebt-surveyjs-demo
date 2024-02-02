export const surveyJson = {
  title: 'Summer EBT Demo',
  logoPosition: 'right',
  pages: [
    {
      name: 'applicationStepsPage',
      elements: [
        {
          type: 'html',
          name: 'applicationSteps',
          html: '<div><span><svg width=\'100\' height=\'75\' id="svg-icon-prepareToApply"><use href="#icon-prepareToApply"></span><br><h4>Application steps</h4>This application should take about <b>15 minutes</b> to complete.</div><div class="box"><b>Steps</b><br><ol><li>Student information</li><li>Household information</li><li>Income and employment</li><li>Contact information</li></ol></div>',
        },
      ],
    },
    {
      name: 'studentInfoStepsPage',
      elements: [
        {
          type: 'html',
          name: 'studentInfoSteps',
          html: '<div id="test"><span><svg width=\'100\' height=\'75\' id="svg-icon-documentAndEnvelope"><use href="#icon-documentAndEnvelope"></span><br>Step 1 of 4<br><h4>Student information</h4>Next, let\'s add the student(s) who you\'re applying for.</div><div class="box"><b>We\'ll ask about</b><br><ol><li>Student information</li><li>School enrollment</li></ol></div>',
        },
      ],
    },
    {
      name: 'schoolAttendancePage',
      elements: [
        {
          type: 'html',
          name: 'schoolAttendanceHtml',
          html: '<div><span><svg width=\'100\' height=\'75\' id="svg-icon-school"><use href="#icon-school"></span><br><h4>School attendance</h4></div>',
        },
        {
          type: 'dropdown',
          name: 'schoolAttendance',
          title: 'In what state, territory, or tribal nation does the student attend school?',
          description:
            'During the 2023-2024 year',
          hideNumber: true,
          choices: [
            {
              value: 'AL',
              text: 'Alabama',
            },
            {
              value: 'AK',
              text: 'Alaska',
            },            {
              value: 'AS',
              text: 'American Samoa',
            },            {
              value: 'AZ',
              text: 'Arizona',
            },            {
              value: 'AR',
              text: 'Arkansas',
            },            {
              value: 'CA',
              text: 'California',
            },            {
              value: 'Cherokee',
              text: 'Cherokee Nation',
            },            {
              value: 'Chickaswa',
              text: 'Chickaswa Nation',
            },            {
              value: 'CO',
              text: 'Colorado',
            },            {
              value: 'CT',
              text: 'Connecticut',
            }
          ],
        }
      ],
    },
    {
      "name": "addStudentPage",
      "elements": [
       {
        "type": "html",
        "name": "addStudentHtml",
        "html": "<div><span><svg width='100' height='75' id=\"svg-icon-face\"><use href=\"#icon-face\"></span><br><h4>Add a student you're applying for</h4></div>"
       },
       {
        "type": "paneldynamic",
        "name": "addChildren",
        "titleLocation": "hidden",
        "valueName": "household",
        "templateElements": [
         {
          "type": "panel",
          "name": "householdMemberPanel",
          "elements": [
           {
            "type": "panel",
            "name": "panel1",
            "elements": [
             {
              "type": "text",
              "name": "childFirstName",
              "title": "What's their first name?",
              "titleLocation": "top",
              "description": "Legally as it appears on official documents, e.g. birth certificate",
              "valueName": "firstName"
             },
             {
              "type": "text",
              "name": "childMiddleName",
              "title": "What's their middle name?",
              "titleLocation": "top",
              "description": "If they have one",
              "valueName": "middleName"
             },
             {
              "type": "text",
              "name": "childLastName",
              "title": "What's their last name?",
              "titleLocation": "top",
              "description": "Legally as it appears on official documents, e.g. birth certificate",
              "valueName": "lastName"
             },
             {
              "type": "expression",
              "name": "childFullName",
              "visible": false,
              "title": "Full Name",
              "valueName": "fullName",
              "expression": "{panel.firstName} + ' ' + {panel.lastName}"
             },
             {
              "type": "panel",
              "name": "birthDate",
              "elements": [
               {
                "type": "dropdown",
                "name": "birthMonth",
                "width": "200px",
                "minWidth": "200px",
                "maxWidth": "200px",
                "title": "Month",
                "titleLocation": "top",
                "choices": [
                 {
                  "value": "01",
                  "text": "01 - January"
                 },
                 {
                  "value": "02",
                  "text": "02 - February"
                 },
                 {
                  "value": "03",
                  "text": "03 - March"
                 }
                ],
                "allowClear": false,
                "autocomplete": "bday-month"
               },
               {
                "type": "text",
                "name": "birthDay",
                "width": "110px",
                "minWidth": "110px",
                "maxWidth": "110px",
                "startWithNewLine": false,
                "title": "Day",
                "titleLocation": "top",
                "inputType": "number",
                "min": 1,
                "max": 31
               },
               {
                "type": "text",
                "name": "birthYear",
                "width": "130px",
                "minWidth": "130px",
                "maxWidth": "130px",
                "startWithNewLine": false,
                "title": "Year",
                "titleLocation": "top"
               }
              ],
              "title": "When were they born?",
              "description": "Month / Day / Year",
              "questionErrorLocation": "bottom",
              "width": "auto",
              "maxWidth": "550px",
              "showQuestionNumbers": "off"
             },
             {
              "type": "radiogroup",
              "name": "isTribalMember",
              "title": "Is this student a registered member of an Indian Tribal Organization?",
              "titleLocation": "top",
              "choices": [
               {
                "value": "yes",
                "text": "Yes"
               },
               {
                "value": "no",
                "text": "No"
               }
              ]
             },
             {
              "type": "text",
              "name": "ssn",
              "title": "Social Security Number (SSN) of this student",
              "titleLocation": "top",
              "description": "Optional. An SSN is not required to receive Summer EBT benefits."
             }
            ],
            "title": "Name, Birthdate, Tribal Organization, & Social Security Info",
            "state": "expanded"
           },
           {
            "type": "panel",
            "name": "homeSituationPanel",
            "elements": [
             {
              "type": "checkbox",
              "name": "question1",
              "title": "Do any of the following apply to {panel.firstName}?",
              "titleLocation": "top",
              "description": "Check all that apply.They may be more likely to be eligible for Summer EBT.",
              "choices": [
               {
                "value": "fosterCare",
                "text": "In foster care"
               },
               {
                "value": "unhoused",
                "text": "Unhoused/homeless"
               },
               {
                "value": "migrant",
                "text": "Child of migrant worker"
               },
               {
                "value": "runaway",
                "text": "Runaway from home"
               }
              ],
              "showNoneItem": true
             },
             {
              "type": "checkbox",
              "name": "question2",
              "title": "What races or ethnicities does {panel.firstName} identify with?",
              "titleLocation": "top",
              "description": "Optional. Select all that apply.",
              "choices": [
               {
                "value": "01",
                "text": "American Indian or Alaska Native"
               },
               {
                "value": "02",
                "text": "Asian"
               },
               {
                "value": "03",
                "text": "Black or African American"
               },
               {
                "value": "04",
                "text": "Hispanic, Latino or Spanish"
               },
               {
                "value": "05",
                "text": "Middle Eastern or North African"
               },
               {
                "value": "06",
                "text": "Native Hawaiian or Pacific Islander"
               },
               {
                "value": "07",
                "text": "White"
               }
              ],
              "showOtherItem": true,
              "otherText": "Some other race or ethnicity"
             }
            ],
            "title": "Home Situation & Race",
            "state": "collapsed"
           }
          ],
          "title": "Information about {panel.fullName}"
         }
        ],
        "noEntriesText": "You haven't added any children yet.\nClick the button below to add a new child.",
        "panelCount": 2,
        "minPanelCount": 1,
        "panelsState": "collapsed",
        "panelAddText": "Add a child",
        "panelRemoveText": "Remove a child",
        "templateVisibleIf": "{panelIndex} > 0"
       }
      ]
     },  
    {
      name: 'languagePage',
      elements: [
        {
          type: 'dropdown',
          name: 'writtenLanguage',
          title: 'What language do you prefer to read or write?',
          description:
            'We will use this language when texting or emailing you.',
          hideNumber: true,
          defaultValue: 'en',
          choices: [
            {
              value: 'en',
              text: 'English',
            },
            {
              value: 'es',
              text: 'Español',
            },
          ],
        },
        {
          type: 'dropdown',
          name: 'spokenLanguage',
          title: 'What language do you prefer to speak?',
          hideNumber: true,
          defaultValue: 'en',
          choices: [
            {
              value: 'en',
              text: 'English',
            },
            {
              value: 'es',
              text: 'Español',
            },
          ],
        },
        {
          type: 'boolean',
          name: 'needInterpreter',
          title: 'Do you need an interpreter?',
          hideNumber: true,
          defaultValue: 'true',
          labelTrue: 'No',
          labelFalse: 'Yes',
          valueTrue: false,
          valueFalse: true,
        },
      ],
      title: 'Language Preference',
    },
    {
      name: 'selfApplyPage',
      elements: [
        {
          type: 'panel',
          name: 'panel3',
          elements: [
            {
              type: 'html',
              name: 'question8',
              html: '<ol type="1">\n <li>Basic info</li>\n<li>Contact info</li>\n<li>Living situation</li>\n</ol>',
            },
          ],
          title: "We'll ask about",
        },
      ],
      title: 'Getting to know you',
    },
    {
      name: 'applicantInfo',
      elements: [
        {
          type: 'paneldynamic',
          name: 'aboutMe',
          title: 'Tell us about yourself',
          valueName: 'household',
          templateElements: [
            {
              type: 'text',
              name: 'firstName',
              title: "What's your first name?",
              description: 'Legally as it appears on your ID',
              hideNumber: true,
              isRequired: true,
              requiredErrorText: 'Make sure to provide a first name.',
            },
            {
              type: 'text',
              name: 'lastName',
              title: "What's your last name?",
              description: 'Legally as it appears on your ID',
              hideNumber: true,
              isRequired: true,
              requiredErrorText: 'Make sure to provide a last name.',
            },
            {
              type: 'expression',
              name: 'fullName',
              visible: false,
              expression: "{panel.firstName} + ' ' + {panel.lastName}",
            },
          ],
          allowAddPanel: false,
          allowRemovePanel: false,
          panelCount: 2,
          minPanelCount: 1,
          showRangeInProgress: false,
          templateVisibleIf: '{panelIndex} = 0',
        },
      ],
      title: 'Tell us about yourself',
    },
    {
      name: 'applicantAddressPage',
      elements: [
        {
          type: 'text',
          name: 'address1',
          title: 'Street address',
          hideNumber: true,
          isRequired: true,
          requiredErrorText: 'must not be blank',
          autocomplete: 'address-line1',
        },
        {
          type: 'text',
          name: 'address2',
          title: 'Street address line 2',
          hideNumber: true,
          requiredErrorText: 'must not be blank',
          autocomplete: 'address-line2',
        },
        {
          type: 'text',
          name: 'city',
          title: 'City',
          hideNumber: true,
          isRequired: true,
          requiredErrorText: 'must not be blank',
          autocomplete: 'address-line2',
        },
        {
          type: 'dropdown',
          name: 'state',
          title: 'State',
          hideNumber: true,
          isRequired: true,
          requiredErrorText: 'must not be blank',
          choices: [
            {
              value: 'Item 1',
              text: 'Alabama - AL',
            },
            {
              value: 'Item 2',
              text: 'Alaska - AK',
            },
            {
              value: 'Item 3',
              text: 'Arizona - AZ',
            },
            {
              value: 'Item 4',
              text: 'Arkansas - AR',
            },
            {
              value: 'Item 5',
              text: 'California - CA',
            },
            {
              value: 'Item 6',
              text: 'Colorado - CO',
            },
            {
              value: 'Item 7',
              text: 'Connecticut - CT',
            },
          ],
        },
        {
          type: 'text',
          name: 'zip',
          title: 'ZIP Code',
          hideNumber: true,
          isRequired: true,
          requiredErrorText: 'must not be blank',
          autocomplete: 'postal-code',
        },
      ],
      title: 'Where are you currently living?',
    },
    {
      name: 'updatesAndRemindersPage',
      elements: [
        {
          type: 'text',
          name: 'reminderPhoneNumber',
          title: "What's your phone number?",
          description:
            "A caseworker may use this number to contact you directly. If you don't add a phone number, service may be slower.",
          inputMask: 'phone',
          inputFormat: '999-999-9999',
          hideNumber: true,
          requiredIf: "{reminderContactMethod} allof ['text']",
          requiredErrorText:
            'You indicated you would like to be contacted by phone. Please make sure to provide a phone number.',
          validators: [
            {
              type: 'regex',
              text: 'Please make sure you are entering a valid 10-digit phone number, area code first.',
              regex:
                '^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$',
            },
          ],
        },
        {
          type: 'text',
          name: 'reminderEmail',
          title: "What's your email address?",
          hideNumber: true,
          requiredIf: "{reminderContactMethod} allof ['email']",
          requiredErrorText:
            'You indicated you would like to be contacted by email. Please make sure to provide an email address.',
          validators: [
            {
              type: 'email',
              text: 'Please make sure you are entering a valid email address.',
            },
          ],
        },
        {
          type: 'checkbox',
          name: 'reminderContactMethod',
          title:
            'How can we send you updates and reminders about your application in the future?',
          isRequired: true,
          requiredErrorText:
            'In order for us to reach out to you with more information about your application, please select at least one contact method.',
          choices: [
            {
              value: 'text',
              text: "It's okay to text me",
            },
            {
              value: 'email',
              text: "It's okay to email me",
            },
          ],
        },
        {
          type: 'html',
          name: 'question17',
          html: 'We may send you text and/or email message to communicate with you about your application. We will only text and/or email if a box is checked above. You will be responsible for any message or data charges from your service provider associated with text messaging. You may opt out of and stop receiving text messages at any time by replying with "STOP" to a text message, or following the unsubscribe link on the email message.',
        },
      ],
      title:
        'How can we send you updates and reminders about your application in the future?',
    },
    {
      name: 'phoneNumberNudgePage',
      elements: [
        {
          type: 'text',
          name: 'addPhoneNumber',
          title: 'Are you sure you want to leave your phone number blank?',
          description:
            "A caseworker may need to contact you by phone about your application. If you don't have a phone number, you can enter a friend or family member's phone number instead.",
          inputType: 'tel',
        },
      ],
      visibleIf:
        "{reminderContactMethod} = ['email'] and {reminderPhoneNumber} empty and {reminderEmail} notempty",
    },
    {
      name: 'page4',
      elements: [
        {
          type: 'panel',
          name: 'panel4',
          elements: [
            {
              type: 'html',
              name: 'question18',
              html: '<ol type="1">\n <li>Your children</li>\n<li>Their school information</li>\n<li>Your household income</li>\n</ol>',
            },
          ],
          title: "We'll ask about",
        },
      ],
      title: 'Eligibility',
    },
    {
      name: 'addChildrenPage',
      elements: [

      ],
    },
    {
      name: 'page5',
      elements: [
        {
          type: 'boolean',
          name: 'itemizeIncome',
          title: "Let's add up your annual household income",
          description:
            'Include all money from jobs, gifts, loans, and cash benefits like Social Security, disability, retirement or pensions, and unemployment.',
          defaultValue: 'false',
          labelTrue:
            'No, I already know my annual household pre-tax income and prefer to enter it directly.',
          labelFalse: 'Add income',
          valueTrue: false,
          valueFalse: true,
        },
      ],
    },
    {
      name: 'page6',
      elements: [
        {
          type: 'checkbox',
          name: 'addIncomeFor',
          title: 'Which household members would you like to add income for?',
          choicesFromQuestion: 'addChildren',
          choiceValuesFromQuestion: 'fullName',
        },
      ],
    },
    {
      name: 'householdIncomePage',
      elements: [
        {
          type: 'paneldynamic',
          name: 'householdIncome',
          title: 'Add Income For',
          valueName: 'household',
          templateElements: [
            {
              type: 'matrixdropdown',
              name: 'incomeSources',
              title: 'What sources does {panel.fullName} receive income from?',
              description:
                "Select all that apply. You do not need to report income that hasn't been received yet.",
              columns: [
                {
                  name: 'hasIncome',
                  title: 'Has Income?',
                  cellType: 'boolean',
                },
                {
                  name: 'yearlyAmount',
                  title: 'Yearly Amount',
                  cellType: 'text',
                  inputMask: 'currency',
                  enableIf: '{row.hasIncome} = true',
                },
              ],
              rows: [
                {
                  value: 'job',
                  text: 'Job (salary, wages, commissions or tips)',
                },
                {
                  value: 'selfEmployment',
                  text: 'Self-employment',
                },
                {
                  value: 'unemployment',
                  text: 'Unemployment',
                },
                {
                  value: 'socialSecurity',
                  text: 'Social Security benefits',
                },
                {
                  value: 'retirement',
                  text: 'Retirement',
                },
                {
                  value: 'childOrSpousalSupport',
                  text: 'Child or Spousal Support',
                },
                {
                  value: 'pension',
                  text: 'Pension Benefits',
                },
                {
                  value: 'investments',
                  text: 'Investment Income',
                },
                {
                  value: 'capitalGains',
                  text: 'Capital Gains',
                },
                {
                  value: 'rentalOrRoyalty',
                  text: 'Rental or Royalty',
                },
                {
                  value: 'farmingOrFishing',
                  text: 'Farming or Fishing',
                },
                {
                  value: 'alimony',
                  text: 'Alimony received',
                },
                {
                  value: 'scholarship',
                  text: 'Taxable scholarship',
                },
                {
                  value: 'cancelledDebt',
                  text: 'Cancelled debt',
                },
                {
                  value: 'courtAwards',
                  text: 'Court awards',
                },
                {
                  value: 'gambling',
                  text: 'Gambling, prizes or awards',
                },
                {
                  value: 'juryDuty',
                  text: 'Jury duty pay',
                },
                {
                  value: 'other',
                  text: 'Other',
                },
              ],
            },
          ],
          templateTitle: '{panel.fullName}',
          allowAddPanel: false,
          allowRemovePanel: false,
          panelsState: 'collapsed',
          templateVisibleIf: '{addIncomeFor} contains {panel.fullName}',
        },
      ],
    },
  ],
  showTitle: false,
  showQuestionNumbers: 'off',
  questionErrorLocation: 'bottom',
  pagePrevText: 'Back',
  pageNextText: 'Continue',
  clearInvisibleValues: 'none',
  "startSurveyText": "Get started",
  "firstPageIsStarted": true,
};
