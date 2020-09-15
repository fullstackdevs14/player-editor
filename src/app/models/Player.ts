import { pick, assign } from 'lodash';
import { Skillset, SkillType } from './skills';
import { skillMap } from '../data/skillmap';
import { armors } from '../data/other';

export class Player {
  name: string = '';
  strength: number = 0;
  dexterity: number = 0;
  mind: number = 0;
  presence: number = 0;

  accessories = {
    armor: '',
    weapon: '',
  };
  traits: string[] = [];

  damagedCount: number = 0;
  tenacityReceived: number = 0;

  skills: Skillset = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  get vitality(): number {
    return Math.max(this.strength + 3 - this.damagedCount, 0);
  }

  get evasion(): number {
    return this.dexterity + 10;
  }

  get armor(): number {
    console.log(this.armorAccessory);
    return this.evasion + this.armorAccessory.value;
  }

  get alacrity(): number {
    return this.dexterity + this.mind;
  }

  get tenacity(): number {
    return this.presence + 1 + this.tenacityReceived;
  }

  get power(): number {
    return 0;
  }

  get maxFightingLevel(): number {
    return Math.min(this.strength, this.dexterity);
  }

  get armorAccessory() {
    const accessory = armors.find(
      (armor) => armor.key === this.accessories.armor
    );
    return accessory || { label: '', value: 0, key: '' };
  }

  takeDamage() {
    this.damagedCount++;
  }

  addTenacity(n: number) {
    this.tenacityReceived += n;
  }

  getMaxSkillLevel(skill: SkillType) {
    const values = skillMap[skill].map((key) => this[key]);
    return Math.min(...values);
  }

  toJSON() {
    return pick(this, [
      'name',
      'strength',
      'dexterity',
      'mind',
      'presence',
      'damagedCount',
      'tenacityReceived',
      'skills',
      'accessories',
      'traits',
    ]);
  }

  loadJSON(data) {
    assign(this, data);
  }
}
