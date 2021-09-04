import { ApplicationInsights } from '@microsoft/applicationinsights-web'

import * as params from '@params';

let { appinsights } = params;

const appInsights = new ApplicationInsights({ config: {
    connectionString: appinsights.connectionstring,
    disableCookiesUsage: appinsights.disablecookiesusage
}});

appInsights.loadAppInsights();
appInsights.trackPageView();
