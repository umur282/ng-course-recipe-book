import { Directive, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') toggleDropdown(eventData: Event) {
    const arrayParentClass = this.elRef.nativeElement.classList.value.split(' ');
    const arrayChildClass = this.elRef.nativeElement.lastElementChild.classList.value.split(' ');

    if (arrayParentClass[arrayParentClass.length - 1] === 'show') {
      this.renderer.removeClass(this.elRef.nativeElement, 'show');
    } else {
      this.renderer.addClass(this.elRef.nativeElement, 'show');
    }

    if (arrayChildClass[arrayChildClass.length - 1] === 'show') {
      this.renderer.removeClass(this.elRef.nativeElement.lastElementChild, 'show');
    } else {
      this.renderer.addClass(this.elRef.nativeElement.lastElementChild, 'show');
    }
  }
}
