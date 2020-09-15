import { Component, ElementRef, ViewChild } from '@angular/core';
import { Player } from './models/Player';

import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('file') fileInput: ElementRef<HTMLInputElement>;

  players: Player[] = [];

  save() {
    const data = this.players.map((p) => p.toJSON());
    var blob = new Blob([JSON.stringify(data)], {
      type: 'text/plain;charset=utf-8',
    });
    saveAs(blob, 'players.json');
  }

  load() {
    this.fileInput.nativeElement.click();
  }

  add() {
    this.players.push(new Player());
  }

  readFile(ev: any) {
    const fr = new FileReader();
    fr.onload = () => {
      try {
        const data = JSON.parse(fr.result as string);
        this.players = data.map((item) => {
          const p = new Player();
          p.loadJSON(item);
          return p;
        });
      } catch (err) {
        console.log(err);
      }
    };

    fr.readAsText(ev.target.files[0]);
  }
}
