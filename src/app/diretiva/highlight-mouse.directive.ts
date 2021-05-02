import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {
  // @HostListener('mouseenter') onMouseOver() {
  //   this.renderer.setStyle(
  //     this.elementRef.nativeElement,
  //     'background-color',
  //     'yellow'
  //   )
  // }
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.renderer.setStyle(
  //     this.elementRef.nativeElement,
  //     'background-color',
  //     'white'
  //   )
  // }
  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = 'yellow'
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'white'
  }
  constructor(
    // private elementRef: ElementRef,
    // private renderer: Renderer2
  ) { }

}
