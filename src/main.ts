import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { ionweb } from "ion.web/sdk";
import { ComponentService, IAngularService } from 'ion.web/sdk/angular';
import { AppComponent } from './app/app.component';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

  ionweb.module('ipm-automation')(async (registry: ionweb.IRegistry)  => {

    const category: ionweb.ICategory = registry.category("ipm-automation", "ipm-automation");

    const moduleService = await registry.getService<IAngularService>("ionweb.angularService").compileModule(AppModule);
    // const componentService = moduleService.injector.get(ComponentService);

    // category.components.push({
    //   id: "test-widget",
    //   displayName: "Test Widget",
    //   template: componentService.asIonElement<void>(AppComponent),
    //   defaultHeight: window.innerHeight - 20,
    //   defaultWidth: window.innerWidth - 20
    // });

    });