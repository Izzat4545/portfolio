import LeftSection from "./components/leftSection";
import RightSection from "./components/rightSection";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:py-0 lg:px-24 lg:flex lg:justify-between lg:gap-4 relative">
      <LeftSection />
      <RightSection />
    </div>
  );
}
