export const surveyJson = {
    "title": "Summer EBT Demo",
    "logoPosition": "right",
    "pages": [
     {
      "name": "applicationStepsPage",
      "elements": [
       {
        "type": "html",
        "name": "applicationSteps",
        "html": "<div><span><svg width='100' height='75' id=\"svg-icon-prepareToApply\"><use href=\"#icon-prepareToApply\"></span><br><h4>Application steps</h4>This application should take about <b>15 minutes</b> to complete.</div><div class=\"box\"><b>Steps</b><br><ol><li>Student information</li><li>Household information</li><li>Income and employment</li><li>Contact information</li></ol></div>"
       }
      ]
     },
     {
      "name": "languagePage",
      "elements": [
       {
        "type": "dropdown",
        "name": "writtenLanguage",
        "title": "What language do you prefer to read or write?",
        "description": "We will use this language when texting or emailing you.",
        "hideNumber": true,
        "defaultValue": "en",
        "choices": [
         {
          "value": "en",
          "text": "English"
         },
         {
          "value": "es",
          "text": "Español"
         }
        ]
       },
       {
        "type": "dropdown",
        "name": "spokenLanguage",
        "title": "What language do you prefer to speak?",
        "hideNumber": true,
        "defaultValue": "en",
        "choices": [
         {
          "value": "en",
          "text": "English"
         },
         {
          "value": "es",
          "text": "Español"
         }
        ]
       },
       {
        "type": "boolean",
        "name": "needInterpreter",
        "title": "Do you need an interpreter?",
        "hideNumber": true,
        "defaultValue": "true",
        "labelTrue": "No",
        "labelFalse": "Yes",
        "valueTrue": false,
        "valueFalse": true
       }
      ],
      "title": "Language Preference"
     },
     {
      "name": "selfApplyPage",
      "elements": [
       {
        "type": "panel",
        "name": "panel3",
        "elements": [
         {
          "type": "html",
          "name": "question8",
          "html": "<ol type=\"1\">\n <li>Basic info</li>\n<li>Contact info</li>\n<li>Living situation</li>\n</ol>"
         }
        ],
        "title": "We'll ask about"
       }
      ],
      "title": "Getting to know you"
     },
     {
      "name": "applicantInfo",
      "elements": [
       {
        "type": "paneldynamic",
        "name": "aboutMe",
        "title": "Tell us about yourself",
        "valueName": "household",
        "templateElements": [
         {
          "type": "text",
          "name": "firstName",
          "title": "What's your first name?",
          "description": "Legally as it appears on your ID",
          "hideNumber": true,
          "isRequired": true,
          "requiredErrorText": "Make sure to provide a first name."
         },
         {
          "type": "text",
          "name": "lastName",
          "title": "What's your last name?",
          "description": "Legally as it appears on your ID",
          "hideNumber": true,
          "isRequired": true,
          "requiredErrorText": "Make sure to provide a last name."
         },
         {
          "type": "expression",
          "name": "fullName",
          "visible": false,
          "expression": "{panel.firstName} + ' ' + {panel.lastName}"
         }
        ],
        "allowAddPanel": false,
        "allowRemovePanel": false,
        "panelCount": 2,
        "minPanelCount": 1,
        "showRangeInProgress": false,
        "templateVisibleIf": "{panelIndex} = 0"
       }
      ],
      "title": "Tell us about yourself"
     },
     {
      "name": "applicantAddressPage",
      "elements": [
       {
        "type": "text",
        "name": "address1",
        "title": "Street address",
        "hideNumber": true,
        "isRequired": true,
        "requiredErrorText": "must not be blank",
        "autocomplete": "address-line1"
       },
       {
        "type": "text",
        "name": "address2",
        "title": "Street address line 2",
        "hideNumber": true,
        "requiredErrorText": "must not be blank",
        "autocomplete": "address-line2"
       },
       {
        "type": "text",
        "name": "city",
        "title": "City",
        "hideNumber": true,
        "isRequired": true,
        "requiredErrorText": "must not be blank",
        "autocomplete": "address-line2"
       },
       {
        "type": "dropdown",
        "name": "state",
        "title": "State",
        "hideNumber": true,
        "isRequired": true,
        "requiredErrorText": "must not be blank",
        "choices": [
         {
          "value": "Item 1",
          "text": "Alabama - AL"
         },
         {
          "value": "Item 2",
          "text": "Alaska - AK"
         },
         {
          "value": "Item 3",
          "text": "Arizona - AZ"
         },
         {
          "value": "Item 4",
          "text": "Arkansas - AR"
         },
         {
          "value": "Item 5",
          "text": "California - CA"
         },
         {
          "value": "Item 6",
          "text": "Colorado - CO"
         },
         {
          "value": "Item 7",
          "text": "Connecticut - CT"
         }
        ]
       },
       {
        "type": "text",
        "name": "zip",
        "title": "ZIP Code",
        "hideNumber": true,
        "isRequired": true,
        "requiredErrorText": "must not be blank",
        "autocomplete": "postal-code"
       }
      ],
      "title": "Where are you currently living?"
     },
     {
      "name": "updatesAndRemindersPage",
      "elements": [
       {
        "type": "text",
        "name": "reminderPhoneNumber",
        "title": "What's your phone number?",
        "description": "A caseworker may use this number to contact you directly. If you don't add a phone number, service may be slower.",
        "inputMask": "phone",
        "inputFormat": "999-999-9999",
        "hideNumber": true,
        "requiredIf": "{reminderContactMethod} allof ['text']",
        "requiredErrorText": "You indicated you would like to be contacted by phone. Please make sure to provide a phone number.",
        "validators": [
         {
          "type": "regex",
          "text": "Please make sure you are entering a valid 10-digit phone number, area code first.",
          "regex": "^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$"
         }
        ]
       },
       {
        "type": "text",
        "name": "reminderEmail",
        "title": "What's your email address?",
        "hideNumber": true,
        "requiredIf": "{reminderContactMethod} allof ['email']",
        "requiredErrorText": "You indicated you would like to be contacted by email. Please make sure to provide an email address.",
        "validators": [
         {
          "type": "email",
          "text": "Please make sure you are entering a valid email address."
         }
        ]
       },
       {
        "type": "checkbox",
        "name": "reminderContactMethod",
        "title": "How can we send you updates and reminders about your application in the future?",
        "isRequired": true,
        "requiredErrorText": "In order for us to reach out to you with more information about your application, please select at least one contact method.",
        "choices": [
         {
          "value": "text",
          "text": "It's okay to text me"
         },
         {
          "value": "email",
          "text": "It's okay to email me"
         }
        ]
       },
       {
        "type": "html",
        "name": "question17",
        "html": "We may send you text and/or email message to communicate with you about your application. We will only text and/or email if a box is checked above. You will be responsible for any message or data charges from your service provider associated with text messaging. You may opt out of and stop receiving text messages at any time by replying with \"STOP\" to a text message, or following the unsubscribe link on the email message."
       }
      ],
      "title": "How can we send you updates and reminders about your application in the future?"
     },
     {
      "name": "phoneNumberNudgePage",
      "elements": [
       {
        "type": "text",
        "name": "addPhoneNumber",
        "title": "Are you sure you want to leave your phone number blank?",
        "description": "A caseworker may need to contact you by phone about your application. If you don't have a phone number, you can enter a friend or family member's phone number instead.",
        "inputType": "tel"
       }
      ],
      "visibleIf": "{reminderContactMethod} = ['email'] and {reminderPhoneNumber} empty and {reminderEmail} notempty"
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "panel",
        "name": "panel4",
        "elements": [
         {
          "type": "html",
          "name": "question18",
          "html": "<ol type=\"1\">\n <li>Your children</li>\n<li>Their school information</li>\n<li>Your household income</li>\n</ol>"
         }
        ],
        "title": "We'll ask about"
       }
      ],
      "title": "Eligibility"
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "paneldynamic",
        "name": "addChildren",
        "title": "Add children",
        "valueName": "household",
        "isRequired": true,
        "templateElements": [
         {
          "type": "text",
          "name": "childFirstName",
          "title": "What's their first name?",
          "description": "Legally as it appears on their ID.",
          "valueName": "firstName"
         },
         {
          "type": "text",
          "name": "childLastName",
          "title": "What's their last name?",
          "description": "Legally as it appears on their ID.",
          "valueName": "lastName"
         },
         {
          "type": "expression",
          "name": "childFullName",
          "visible": false,
          "valueName": "fullName",
          "expression": "{panel.firstName} + ' ' + {panel.lastName}"
         },
         {
          "type": "dropdown",
          "name": "childSchool",
          "title": "What school do they go to?",
          "choices": [
           {
            "value": "bayside",
            "text": "Bayside High School"
           },
           {
            "value": "carter",
            "text": "Carter High School"
           },
           {
            "value": "downtown",
            "text": "Downtown High School"
           }
          ]
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
      "name": "page5",
      "elements": [
       {
        "type": "boolean",
        "name": "itemizeIncome",
        "title": "Let's add up your annual household income",
        "description": "Include all money from jobs, gifts, loans, and cash benefits like Social Security, disability, retirement or pensions, and unemployment.",
        "defaultValue": "false",
        "labelTrue": "No, I already know my annual household pre-tax income and prefer to enter it directly.",
        "labelFalse": "Add income",
        "valueTrue": false,
        "valueFalse": true
       }
      ]
     },
     {
      "name": "page6",
      "elements": [
       {
        "type": "checkbox",
        "name": "addIncomeFor",
        "title": "Which household members would you like to add income for?",
        "choicesFromQuestion": "addChildren",
        "choiceValuesFromQuestion": "fullName"
       }
      ]
     },
     {
      "name": "householdIncomePage",
      "elements": [
       {
        "type": "paneldynamic",
        "name": "householdIncome",
        "title": "Add Income For",
        "valueName": "household",
        "templateElements": [
         {
          "type": "matrixdropdown",
          "name": "incomeSources",
          "title": "What sources does {panel.fullName} receive income from?",
          "description": "Select all that apply. You do not need to report income that hasn't been received yet.",
          "columns": [
           {
            "name": "hasIncome",
            "title": "Has Income?",
            "cellType": "boolean"
           },
           {
            "name": "yearlyAmount",
            "title": "Yearly Amount",
            "cellType": "text",
            "inputMask": "currency",
            "enableIf": "{row.hasIncome} = true"
           }
          ],
          "rows": [
           {
            "value": "job",
            "text": "Job (salary, wages, commissions or tips)"
           },
           {
            "value": "selfEmployment",
            "text": "Self-employment"
           },
           {
            "value": "unemployment",
            "text": "Unemployment"
           },
           {
            "value": "socialSecurity",
            "text": "Social Security benefits"
           },
           {
            "value": "retirement",
            "text": "Retirement"
           },
           {
            "value": "childOrSpousalSupport",
            "text": "Child or Spousal Support"
           },
           {
            "value": "pension",
            "text": "Pension Benefits"
           },
           {
            "value": "investments",
            "text": "Investment Income"
           },
           {
            "value": "capitalGains",
            "text": "Capital Gains"
           },
           {
            "value": "rentalOrRoyalty",
            "text": "Rental or Royalty"
           },
           {
            "value": "farmingOrFishing",
            "text": "Farming or Fishing"
           },
           {
            "value": "alimony",
            "text": "Alimony received"
           },
           {
            "value": "scholarship",
            "text": "Taxable scholarship"
           },
           {
            "value": "cancelledDebt",
            "text": "Cancelled debt"
           },
           {
            "value": "courtAwards",
            "text": "Court awards"
           },
           {
            "value": "gambling",
            "text": "Gambling, prizes or awards"
           },
           {
            "value": "juryDuty",
            "text": "Jury duty pay"
           },
           {
            "value": "other",
            "text": "Other"
           }
          ]
         }
        ],
        "templateTitle": "{panel.fullName}",
        "allowAddPanel": false,
        "allowRemovePanel": false,
        "panelsState": "collapsed",
        "templateVisibleIf": "{addIncomeFor} contains {panel.fullName}"
       }
      ]
     }
    ],
    "showTitle": false,
    "showQuestionNumbers": "off",
    "questionErrorLocation": "bottom",
    "pagePrevText": "Back",
    "pageNextText": "Continue",
    "clearInvisibleValues": "none"
   }