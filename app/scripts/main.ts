import "core-js/es/reflect";
import 'zone.js';
import '../index.html';

// import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./modules/app.module";

// enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err: Error) => console.error(err));
