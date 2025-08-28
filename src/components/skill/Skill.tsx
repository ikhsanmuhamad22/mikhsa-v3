import { useEffect, useState } from "react";
import SkillItem from "./SkilItem";
import SkillHeader from "./SkillHeader";
import {
  education,
  skillCertificate,
  skillLanguage,
  skillSoftware,
} from "../../utils/data";

const Skill = () => {
  const [skill, setSkill] = useState("education");
  const [skillItem, setSkillItem] = useState(skillSoftware);

  const onChangeSkill = (result: string) => {
    setSkill(result);
  };

  useEffect(() => {
    const getSkill = () => {
      switch (skill) {
        case "education":
          setSkillItem(education);
          break;
        case "language":
          setSkillItem(skillLanguage);
          break;
        case "certificate":
          setSkillItem(skillCertificate);
          break;
        case "software":
          setSkillItem(skillSoftware);
          break;
      }
    };

    getSkill();
  }, [skill]);

  return (
    <section id="skill" className="my-10">
      <h1 className="text-2xl font-bold mb-3">Skills</h1>
      <div className="px-2">
        <SkillHeader changeSkill={onChangeSkill} skillSection={skill} />
        <SkillItem skills={[...skillItem].reverse()} skillSection={skill} />
      </div>
    </section>
  );
};

export default Skill;
