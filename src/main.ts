import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { ionweb } from "ion.web/sdk";


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

  ionweb.module('ipm-automation')(registry => {
    const category = registry.category('webpack-sample', 'Webpack Sample');
    });