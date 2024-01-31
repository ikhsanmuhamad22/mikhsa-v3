import { skillItem } from '../../utils/data';

const SkillItem = () => {
  const skills: SkillItem[] = skillItem;
  return (
    <div className="grid grid-cols-4 gap-2 mt-3">
      {skills.map((skill: SkillItem) => (
        <div className="bg-silver rounded-sm text-dark">
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
