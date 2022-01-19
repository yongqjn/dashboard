// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mockUrl: "http://localhost:3000/",
  localUrl : "http://localhost:8080/api",
  weatherUrl : "https://api.openweathermap.org/data/2.5/weather?q=",
  WEATHER_API_KEY : "2d053ce1475c1e0120b93b5d2ade6906"

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
