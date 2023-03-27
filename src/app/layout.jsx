import Footer from "@/layout/Footer";
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Cat Wiki",
  description: "Get to know more about your favorite cat breeds.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        async
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.GA_MEASUREMENT_ID}');
            `,
        }}
      />
      <body className="flex min-h-screen flex-col justify-between">
        {children}
        <Footer />
      </body>
    </html>
  );
}
