export enum SkillType {
  Fighting,
  Thievery,
  Stealth,
  Archery,
  Learned,
  Survival,
  Perception,
  Apothecary,
  Intimidation,
  Performance,
  Manipulation,
  Insight,
  Power,
}

export type Skillset = {
  [key in SkillType]: number;
};

export type BasicSkill = 'strength' | 'dexterity' | 'mind' | 'presence';

export type SkillMap = {
  [key in SkillType]: BasicSkill[];
};
