import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "../globals.css";
import "../styles/core-css.css";
import "../styles/unit-css.css";
import "../styles/spacing.css";
import "../styles/magnific-popup-css.css";
import "../styles/elementor-css.css";
import "../styles/animation-css.css";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import { TrackPageView } from "@/components/trackView/TrackPageView";




export const metadata: Metadata = {
  title: "Ritz Media World",
  description: "Best digital agency in India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageWrapper>
          <TrackPageView />
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
