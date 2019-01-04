import "core-js/es6/reflect";
import "core-js/es7/reflect";

import "zone.js/dist/zone";

// import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./modules/app.module";

// enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err: any) => console.error(err));
