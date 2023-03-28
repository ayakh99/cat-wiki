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
      {
        name: "pageTitle",
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

  const topSearches = response.rows.reduce((acc, row) => {
    const title = row.dimensionValues[1].value;
    if (
      title.includes("not set") ||
      title.includes("Not found") ||
      title.includes("undefined")
    )
      return acc;

    acc.push(row.dimensionValues[0].value.split("/")[2]);
    return acc;
  }, []);

  const uniqueIds = [...new Set(topSearches)];

  return Array.from(uniqueIds);
}
