import ProfileSection from "./ProfileSection";
import TechnicalSkills from "./TechnicalSkills";
import ProfessionalExperiences from "./ProfessionalExperiences";
import SideProjects from "./SideProjects";
import Footer from "./Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <ProfileSection />
      <TechnicalSkills />
      <ProfessionalExperiences />
      <SideProjects />
      <Footer />
    </div>
  );
}
