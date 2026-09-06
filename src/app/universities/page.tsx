import type { Metadata } from "next";
import NavBar from "@/components/ui/NavBar";
import UniversitiesHero from "@/components/universities/UniversitiesHero";
import UniversitiesJourney from "@/components/universities/UniversitiesJourney";
import UniversitiesExploreGrid from "@/components/universities/UniversitiesExploreGrid";
import UniversitiesRecommendations from "@/components/universities/UniversitiesRecommendations";
import UniversitiesDeepDive from "@/components/universities/UniversitiesDeepDive";
import UniversitiesNextSteps from "@/components/universities/UniversitiesNextSteps";
import UniversitiesCompareTool from "@/components/universities/UniversitiesCompareTool";
import UniversitiesSocialProof from "@/components/universities/UniversitiesSocialProof";
import UniversitiesCTAFooter from "@/components/universities/UniversitiesCTAFooter";

export const metadata: Metadata = {
  title: "Universities — Find Your Best-Fit Global Campus with Novi",
  description:
    "Don't just find a university. Find your university. Explore universities, courses and countries based on what matters to you.",
};

export default function UniversitiesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground selection:bg-purple-500/30">
      <NavBar />
      <main className="relative z-10 flex flex-col">
        <UniversitiesHero />
        <UniversitiesJourney />
        <UniversitiesExploreGrid />
        <UniversitiesRecommendations />
        <UniversitiesDeepDive />
        <UniversitiesNextSteps />
        <UniversitiesCompareTool />
        <UniversitiesSocialProof />
        <UniversitiesCTAFooter />
      </main>
    </div>
  );
}
