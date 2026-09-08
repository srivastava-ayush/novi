import type { Metadata } from "next";
import NavBar from "@/components/ui/NavBar";
import StudentsHero from "@/components/students/StudentsHero";
import StudentsChallengeGrid from "@/components/students/StudentsChallengeGrid";
import StudentsCareerExplorer from "@/components/students/StudentsCareerExplorer";
import StudentsJourney from "@/components/students/StudentsJourney";
import StudentsDashboardPreview from "@/components/students/StudentsDashboardPreview";
import StudentsAIMentor from "@/components/students/StudentsAIMentor";
import StudentsGrowthPipeline from "@/components/students/StudentsGrowthPipeline";
import StudentsSocialProof from "@/components/students/StudentsSocialProof";
import StudentsCTAFooter from "@/components/students/StudentsCTAFooter";

export const metadata: Metadata = {
  title: "For Students — Discover Your Path with Novi",
  description:
    "You don't need to have it all figured out. Novi helps you discover what you're good at, explore what's possible, and build a path toward your future.",
};

export default function ForStudentsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground selection:bg-purple-500/30">
      <NavBar />
      <main className="relative z-10 flex flex-col">
        <StudentsHero />
        <StudentsChallengeGrid />
        <StudentsCareerExplorer />
        <StudentsJourney />
        <StudentsDashboardPreview />
        <StudentsAIMentor />
        <StudentsGrowthPipeline />
        <StudentsSocialProof />
        <StudentsCTAFooter />
      </main>
    </div>
  );
}
