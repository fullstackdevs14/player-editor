import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editable-field',
  templateUrl: './editable-field.component.html',
  styleUrls: ['./editable-field.component.scss'],
})
export class EditableFieldComponent implements OnInit {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() min: number;
  @Input() max: number;
  @Input() editable: boolean = true;
  @Input() set value(val) {
    this._value = val;
  }
  @Output() valueChange: EventEmitter<any>;

  editing: boolean = false;
  _value: any = '';

  constructor() {
    this.valueChange = new EventEmitter<any>();
  }

  ngOnInit(): void {}

  toggleEdit() {
    this.editing = !this.editing;
  }

  save() {
    let val = this._value;
    if (this.type === 'number') {
      val = +this._value;
      val = Number.isNaN(val) ? 0 : val;

      if (this.min !== undefined) {
        val = Math.max(this.min, val);
      }
      if (this.max !== undefined) {
        val = Math.min(this.max, val);
      }
    }

    this._value = val;

    this.valueChange.emit(val);
    this.toggleEdit();
  }
}
