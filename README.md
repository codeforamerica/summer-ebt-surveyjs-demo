ng# SurveyjsAngularHelloworld

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.2.


## Build

Run `npm install` to load the package dependencies.

Then run `ng build` to build the project. 

## Development server

1. Set up local environment variables. Run `cp src/environments/environment.template src/environments/environment.ts` and `cp src/environments/environment.template src/environments/environment.development.ts`. If you don't want to use Mixpanel for analytics, there is nothing else you need to do since it's disabled by default. If you want to configure Mixpanel, read the [Third-party integrations section](#third-party-integrations).
2. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Third-party integrations

This project supports using Mixpanel for analytics. Using Mixpanel is optional and can be configured
with the `useMixpanel` environment variable, which is a boolean. If you do decide to use Mixpanel, you
should create a new Mixpanel project. In the Mixpanel console, go to Settings > Project Settings and retrieve the project token. You should add this token in the `mixpanelToken` variable and set `useMixpanel` to true. Different Mixpanel projects should be created for production and development.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## TODO

1. Markdown (DONE)
1. PDF Output using SurveyJS PDF Generator (DONE)
1. Multi language support (DONE)
1. Input masking (DONE)
1. Custom icons (DONE)
1. CfA Styling (IN PROGRESS)
1. Autocomplete (IN PROGRESS)
1. Address validation
1. Deploy app to AWS (S3 bucket)
1. Document upload to S3
1. Transifex
1. Dependent dropdowns
1. Accessibility testing
1. Browser compatibility
1. Add multi language content
1. Server side rendering (requires back end server - assumes node.js)
