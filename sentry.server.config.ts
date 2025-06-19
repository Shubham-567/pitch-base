// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

// run sentry only on production build
if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn: "https://38e7195eb0261b74d8b40e0b7a4323ab@o4509525126217728.ingest.us.sentry.io/4509525135327232",

    // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
    tracesSampleRate: 1,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,
  });
}
