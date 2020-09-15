import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-value-generator',
  templateUrl: './value-generator.component.html',
  styleUrls: ['./value-generator.component.scss'],
})
export class ValueGeneratorComponent implements OnInit {
  @Input() level: number = 0;

  generatedValue: number = 0;

  constructor() {}

  ngOnInit(): void {}

  generate() {
    if (this.level === 0) {
      this.generatedValue = Math.min(this.random(1, 20), this.random(1, 20));
    } else {
      this.generatedValue =
        this.random(1, 20) + this.random(1, 4 + (this.level - 1) * 2);
    }
  }

  private random(min, max) {
    return min + Math.round(Math.random() * (max - min));
  }
}
