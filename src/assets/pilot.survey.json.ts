export const surveyJson = {
 "title": "Summer EBT Demo",
 "logoPosition": "right",
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "html",
     "name": "question4",
     "html": "This application should be filled out by a parent or guardian. It will take less than <b>10 minutes</b> to complete."
    },
    {
     "type": "panel",
     "name": "panel1",
     "elements": [
      {
       "type": "html",
       "name": "question1",
       "html": "<ul>\n<li>Your personal information</li>\n<li>Your children's information</li>\n<li>Your family's income</li>\n</ul>"
      }
     ],
     "title": "We will ask you about",
     "state": "collapsed"
    },
    {
     "type": "panel",
     "name": "panel2",
     "elements": [
      {
       "type": "html",
       "name": "question2",
       "html": "<p>At the end of this application, you will be asked to add documents that verify your identity and date of birth, proof of US residence, and total household income. For household income, you will need to submit documentation for any income earning adult in your household.</p>\n<p>You can use your phone to take photos of paper documents or select a file from your device.</p>\n<p>You can always return to our homepage to add documents later, too.</p>"
      }
     ],
     "title": "Adding documents",
     "state": "collapsed"
    },
    {
     "type": "html",
     "name": "question3",
     "html": "<div>\n<i class=\"icon-lock_outline\"></i>\n<span>Your information is secure and will be handled in accordance with our <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://sebt.codeforamerica.app/privacy\">privacy policy</a>.</span>\n</div>"
    }
   ],
   "title": "How this works"
  },
  {
   "name": "pageHouseholdStart",
   "elements": [
    {
     "type": "dropdown",
     "name": "question5",
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
     "name": "question6",
     "title": "What language do you prefer to speak?",
     "hideNumber": true,
     "defaultValue": "Item 1",
     "choices": [
      {
       "value": "Item 1",
       "text": "English"
      },
      {
       "value": "Item 2",
       "text": "Español"
      }
     ]
    },
    {
     "type": "boolean",
     "name": "question7",
     "title": "Do you need an interpreter?",
     "hideNumber": true,
     "defaultValue": "false"
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
     "hideNumber": true,
     "isRequired": true,
     "requiredErrorText": "Make sure to provide a last name."
    }
   ],
   "title": "Tell us about yourself"
  },
  {
   "name": "page2",
   "elements": [
    {
     "type": "text",
     "name": "question9",
     "title": "Street address",
     "hideNumber": true,
     "isRequired": true,
     "requiredErrorText": "must not be blank",
     "autocomplete": "address-line1"
    },
    {
     "type": "text",
     "name": "question10",
     "title": "Street address line 2",
     "hideNumber": true,
     "requiredErrorText": "must not be blank",
     "autocomplete": "address-line2"
    },
    {
     "type": "text",
     "name": "question11",
     "title": "City",
     "hideNumber": true,
     "isRequired": true,
     "requiredErrorText": "must not be blank",
     "autocomplete": "address-line2"
    },
    {
     "type": "dropdown",
     "name": "question12",
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
     "name": "question13",
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
   "name": "pgUpdatesAndReminders",
   "elements": [
    {
     "type": "text",
     "name": "reminderPhoneNumber",
     "title": "What's your phone number?",
     "description": "A caseworker may use this number to contact you directly. If you don't add a phone number, service may be slower.",
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
   "name": "addPhoneNumberPg",
   "elements": [
    {
     "type": "boolean",
     "name": "addPhoneNumber",
     "title": "Are you sure you want to leave your phone number blank?",
     "hideNumber": true,
     "defaultValue": "false",
     "labelTrue": "Add a phone number",
     "labelFalse": "Continue without it"
    }
   ],
   "visibleIf": "{reminderContactMethod} = ['email'] and {reminderPhoneNumber} empty and {reminderEmail} notempty",
   "title": "No Phone Number"
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
  }
 ],
 "triggers": [
  {
   "type": "skip",
   "expression": "{addPhoneNumber} = true",
   "gotoName": "reminderPhoneNumber"
  }
 ],
 "showTitle": false,
 "showQuestionNumbers": "off",
 "pagePrevText": "Back",
 "pageNextText": "Continue",
 "showPreviewBeforeComplete": "showAnsweredQuestions"
}