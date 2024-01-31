import { skillItem } from '../../utils/data';

const SkillItem = () => {
  const skills: SkillItem[] = skillItem;
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 mt-3 max-w-full">
      {skills.map((skill: SkillItem) => (
        <div className="bg-silver hover:bg-light rounded-sm text-dark">
          <p className="p-1 pl-2" key={skill.id}>
            {skill.nameSkill}
          </p>
        </div>
      ))}
    </div>
  );
};

interface SkillItem {
  id: number;
  nameSkill: string;
}

export default SkillItem;
