import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';
 
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;
//   @HostListener('click', ['$event']) toggleOpen(event: Event) {
//     console.log('clicked on elem', event);
//     this.isOpen = !this.isOpen;
//   }
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {
      console.log('DropdownDirectiveconstructor', elRef);
  }
}