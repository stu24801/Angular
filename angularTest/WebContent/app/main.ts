import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import 'hammerjs';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);