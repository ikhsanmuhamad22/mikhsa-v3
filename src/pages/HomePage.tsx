import Skill from '../components/skill/Skill';
import Summery from '../components/Summery';

const HomePage = () => {
  return (
    <main className="md:w-3/5 md:mx-auto mx-3 w-full h-full m-auto">
      <Summery />
      <Skill />
    </main>
  );
};

export default HomePage;
