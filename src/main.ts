import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Noir } from './app/preset';
import { usePreset } from '@primeuix/themes';

usePreset(Noir)

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
