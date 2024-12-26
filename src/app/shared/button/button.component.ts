import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  standalone: true,
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() type: string = 'submit';
  @Input() disabled: boolean = false;
  @Input() class: string = 'Button';
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    if(!this.disabled) {
      this.onClick.emit();
    }
  }


}
