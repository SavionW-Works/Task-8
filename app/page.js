import TopContent from "../components/TopContent";
import SocialLinks from "../components/SocialLinks";
import NonSocialLinks from "../components/NonSocialLinks";

export default async function Home() {
  return (
    <main className="flex grid flex-col grid-cols-1 grid-rows-3 space-y-8 justify-items-center">
      <div>
        <TopContent />
      </div>
      <div>
        <SocialLinks />
      </div>

      <div>
        <NonSocialLinks />
      </div>
    </main>
  );
}
