import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';
import { Player } from 'src/app/models/Player';
import { armors, weapons, traits } from '../../data/other';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  @Input() player: Player;

  readonly armors = armors;
  readonly weapons = weapons;
  readonly traits = traits;

  traitDict: any = {};

  constructor(public cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.player.currentValue) {
      this.player = changes.player.currentValue;
      const dict: any = {};
      this.player.traits.forEach((t) => (dict[t] = true));
      this.traitDict = dict;
    }
  }

  takeDamage() {
    this.player.takeDamage();
  }

  updateAccessory(key, val) {
    const data = this.player.toJSON();
    const newPlayer = new Player();
    newPlayer.loadJSON({
      ...data,
      accessories: {
        ...data.accessories,
        [key]: val,
      },
    });
    console.log(newPlayer)
    this.player = newPlayer;
  }

  updateTrait(key, ev) {
    this.traitDict[key] = ev.checked;
    this.player.traits = Object.keys(this.traitDict);
  }
}
