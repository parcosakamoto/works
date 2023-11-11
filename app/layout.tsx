import {
  baseMetadata,
  openGraphMetadata,
  twitterMetadata,
} from "lib/baseMetadata";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import Header from "./header";
import Nav from "./nav";
import Footer from "./footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div id="wrapper">
          <div id="nav">
            <Header />
            <Nav />
          </div>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
        <Footer />
      </body>
    </html>
  );
}

export const metadata = {
  ...baseMetadata,
  openGraph: {
    ...openGraphMetadata,
  },
  twitter: {
    ...twitterMetadata,
  },
};
