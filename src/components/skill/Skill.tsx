import { useEffect, useState } from 'react';
import SkillItem from './SkilItem';
import SkillHeader from './SkillHeader';
import {
  skillCertificate,
  skillLanguage,
  skillSoftware,
} from '../../utils/data';

const Skill = () => {
  const [skill, setSkill] = useState('software');
  const [skillItem, setSkillItem] = useState(skillSoftware);

  const onChangeSkill = (result: string) => {
    setSkill(result);
  };

  useEffect(() => {
    const getSkill = () => {
      switch (skill) {
        case 'software':
          setSkillItem(skillSoftware);
          break;
        case 'language':
          setSkillItem(skillLanguage);
          break;
        case 'certificate':
          setSkillItem(skillCertificate);
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
        <SkillItem skills={skillItem} skillSection={skill} />
      </div>
    </section>
  );
};

export default Skill;
