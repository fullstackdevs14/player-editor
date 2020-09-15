import { SkillMap, SkillType } from '../models/skills';

export const skillMap: SkillMap = {
  [SkillType.Fighting]: ['strength', 'dexterity'],
  [SkillType.Thievery]: ['dexterity'],
  [SkillType.Stealth]: ['dexterity'],
  [SkillType.Archery]: ['dexterity'],
  [SkillType.Learned]: ['mind'],
  [SkillType.Survival]: ['mind'],
  [SkillType.Perception]: ['mind'],
  [SkillType.Apothecary]: ['mind'],
  [SkillType.Intimidation]: ['presence'],
  [SkillType.Performance]: ['presence'],
  [SkillType.Manipulation]: ['presence'],
  [SkillType.Insight]: ['presence'],
  [SkillType.Power]: ['presence', 'mind'],
};

export const skillLevels = [
  { label: 'Untrained', value: 0 },
  { label: 'Novice', value: 1 },
  { label: 'Apprentice', value: 2 },
  { label: 'Adept', value: 3 },
  { label: 'Expert', value: 4 },
  { label: 'Master', value: 5 },
];
