import Contacts from '../components/contacts/Contacts';
import Project from '../components/project/Project';
import Skill from '../components/skill/Skill';
import Summery from '../components/Summery';

const HomePage = () => {
  return (
    <main className="md:w-3/5 md:mx-auto mx-3 gap-5 w-full h-full m-auto">
      <Summery />
      <Skill />
      <Project />
      <Contacts />
      <h1 className="text-end font-medium italic mb-2">
        @Ikhsan_muhammad_2024
      </h1>
    </main>
  );
};

export default HomePage;
