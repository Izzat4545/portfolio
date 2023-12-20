import ExperienceList from "./rightSectionComponents/experienceList";

const RightSection = () => {
  return (
    <>
      <div className="w-[50%] text-[18px]">
        Back in 2012, I decided to try my hand at creating custom Tumblr themes
        and tumbled head first into the rabbit hole of coding and web
        development. Fast-forward to today, and I`ve had the privilege of
        building software for an advertising agency, a start-up, a student-led
        design studio, and a huge corporation. My main focus these days is
        building products and leading projects for our clients at Upstatement.
        In my free time I`ve also released an online video course that covers
        everything you need to know to build a web app with the Spotify API.
        When I`m not at the computer, I`m usually rock climbing, hanging out
        with my wife and two cats, or running around Hyrule searching for Korok
        seeds K o r o k s e e d s .
      </div>
      <ExperienceList
        fromTo="2018-present"
        content="projects for our clients at Upstatement.
        In my free time I`ve also released an online video course that covers
        everything you need to know to build a web app with the Spotify API.
        When I`m not at the computer, I`m usually rock climbing, hanging out
        with my wife and two cats, or running around Hyrule searching for Korok
        seeds K o r o k s e e d s ."
        position="intern"
        role="Engineer"
        tools={["react", "react", "react"]}
      />
    </>
  );
};

export default RightSection;
