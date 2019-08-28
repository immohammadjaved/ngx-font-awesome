import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngx-fa',
  template: `
    <i class="fa fa-{{ name }}"
      [ngClass]="getClasses()"
      [class.fa-fw]="fixed"
      [class.fa-border]="border"
      [class.fa-spin]="animation"
      aria-hidden="true">
    </i>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxFontAwesomeComponent implements OnInit {
  @Input() name: string;
  @Input() size: string;
  @Input() animation: boolean;
  @Input() rotate: number;
  @Input() flip: string;
  @Input() fixed: boolean;
  @Input() border: boolean;
  @Input() customClass: string;
  classes: string = '';
  constructor() { }

  ngOnInit() {
  }

  /**
   * getClasses()
   * Function will return Options in class form
   */
  getClasses() {
    (this.size) ? this.classes += `fa-${this.size} ` : '';
    (this.rotate) ? this.classes += `fa-rotate-${this.rotate} ` : '';
    (this.flip) ? this.classes += `fa-flip-${this.flip} ` : '';
    (this.customClass) ? this.classes += `${this.customClass} ` : '';
    return this.classes;
  }
}
