import SkillItem from './SkilItem';
import SkillHeader from './SkillHeader';

const Skill = () => {
  return (
    <section id="skill">
      <h1 className="text-2xl font-bold mb-3">Skills</h1>
      <SkillHeader />
      <SkillItem />
    </section>
  );
};

export default Skill;
