const SkillItem = ({ skills, skillSection }: SkillItemProps) => {
  return (
    <div
      className={`grid ${
        skillSection === "certificate" || skillSection === "education"
          ? "grid-cols-1"
          : "lg:grid-cols-4 md:grid-cols-3 grid-cols-2"
      }  gap-2 mt-3 max-w-full`}
    >
      {skills.map((skill: SkillItem) => (
        <div className="bg-jet hover:bg-dark rounded-sm text-white hover:scale-105 transition-all">
          <p className="p-1 pl-2 font-medium " key={skill.id}>
            {skill.nameSkill}
          </p>
        </div>
      ))}
    </div>
  );
};

interface SkillItemProps {
  skills: SkillItem[];
  skillSection: string;
}

interface SkillItem {
  id: number;
  nameSkill: string;
}

export default SkillItem;
