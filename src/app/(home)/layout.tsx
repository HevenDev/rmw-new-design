// app/(home)/layout.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/core-css.css";
import "../styles/unit-css.css";
import "../styles/spacing.css";
import "../styles/magnific-popup-css.css";
import "../styles/elementor-css.css";
import "../styles/animation-css.css";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import Button from "@/components/sideButton/sideButton";

// import { TrackPageView } from "@/components/trackView/TrackPageView";

export const metadata = {
  title: "Ritz Media World",
  description: "Best digital agency in India",
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
        <PageWrapper>
          {/* <TrackPageView /> */}
          {children}
          <Button/>
        </PageWrapper>
  );
}
