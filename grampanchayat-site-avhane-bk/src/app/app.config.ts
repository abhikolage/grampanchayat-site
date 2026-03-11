import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideAppInitializer, inject } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { SiteConfigService } from './Services/site-config.service';

export const appConfig: ApplicationConfig = {
  providers: [

    provideHttpClient(),

    provideBrowserGlobalErrorListeners(),

    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      })
    ),

    provideAppInitializer(() => {
      const configService = inject(SiteConfigService);
      return configService.loadConfig();
    })

  ]
};