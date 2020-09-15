import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { skillLevels } from '../../data/skillmap';

@Component({
  selector: 'app-skill-selector',
  templateUrl: './skill-selector.component.html',
  styleUrls: ['./skill-selector.component.scss'],
})
export class SkillSelectorComponent implements OnInit {
  @Input() label: string = '';
  @Input() set value(val: number) {
    this._value = val;
  }
  @Input() maxLevel: number = 0;
  @Output() valueChange: EventEmitter<any>;

  editing: boolean = false;
  _value = 0;

  readonly skillLevels = skillLevels;

  constructor() {
    this.valueChange = new EventEmitter<any>();
  }

  ngOnInit(): void {}

  get options() {
    return skillLevels.filter((level) => level.value <= this.maxLevel);
  }

  toggleEdit() {
    this.editing = !this.editing;
  }

  save() {
    this.valueChange.emit(this._value);
    this.toggleEdit();
  }
}
