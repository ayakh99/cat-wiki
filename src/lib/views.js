import { BetaAnalyticsDataClient } from "@google-analytics/data";

const cred = JSON.parse(
  Buffer.from(process.env.GOOGLE_APPLICATION_CREDENTIALS, "base64")
    .toString()
    .replace(/\n/g, "")
);

const analyticsDataClient = new BetaAnalyticsDataClient({
  projectId: cred.projectId,
  credentials: {
    client_email: cred.client_email,
    private_key: cred.private_key,
  },
});

export default async function getTopSearches() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${process.env.GA_PROPERTY_ID}`,
    dateRanges: [
      {
        startDate: "2023-01-31",
        endDate: "today",
      },
    ],
    dimensions: [
      {
        name: "pagePath",
      },
    ],
    dimensionFilter: {
      filter: {
        fieldName: "pagePath",
        stringFilter: {
          matchType: "BEGINS_WITH",
          value: "/breeds/",
        },
      },
    },
    orderBys: [
      {
        desc: true,
        metric: {
          metricName: "screenPageViews",
        },
      },
    ],
    metrics: [
      {
        name: "screenPageViews",
      },
    ],
  });

  const topSearches = response.rows.map((row) => {
    return row.dimensionValues[0].value.split("/")[2];
  });

  return topSearches;
}
