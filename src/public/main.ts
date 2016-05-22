import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { TESTPROJECTAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(TESTPROJECTAppComponent);
