<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the DevEvent Next.js App Router project. Here is a summary of all changes made:

- **`instrumentation-client.ts`** (new): Initializes PostHog client-side using the `instrumentation-client.ts` pattern (recommended for Next.js 15.3+). Configures the reverse proxy endpoint, enables exception capture, and sets debug mode for development.
- **`next.config.ts`** (updated): Added reverse proxy rewrites to route PostHog ingestion requests through `/ingest/*`, improving reliability and ad-blocker resistance. Also set `skipTrailingSlashRedirect: true` as required by PostHog.
- **`app/components/ExploreBtn.tsx`** (updated): Added `posthog.capture('explore_events_clicked')` to the existing `onClick` handler.
- **`app/components/EventCard.tsx`** (updated): Added `"use client"` directive and `posthog.capture('event_card_clicked', {...})` with rich properties (title, slug, location, date) on the link's `onClick`.
- **`.env.local`** (new): Created with `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` for the EU PostHog instance.

## Events

| Event Name | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicks the 'Explore Events' CTA button on the homepage hero section | `app/components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicks on an event card to view event details, capturing event title, slug, location, and date | `app/components/EventCard.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://eu.posthog.com/project/173316/dashboard/663444
- **Insight — Explore Events CTA Clicks**: https://eu.posthog.com/project/173316/insights/RbRNmi8X
- **Insight — Event Card Clicks Over Time**: https://eu.posthog.com/project/173316/insights/K4pzjMeK
- **Insight — Homepage to Event Detail Funnel**: https://eu.posthog.com/project/173316/insights/qeXpXwt8
- **Insight — Most Popular Events**: https://eu.posthog.com/project/173316/insights/CQX0QUyX

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
