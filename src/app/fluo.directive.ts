import { Directive, ElementRef, HostListener, Input, HostBinding } from '@angular/core';


@Directive({
  selector: "[fluo]"
})
export class FluoDirective {

    @Input("fluo")
    color: string;

    defaultColor = "yellow";

    @HostBinding('class.bold')
    isBold = false;


  @HostListener("mouseenter")
  rendreFluo() {
    this.element.nativeElement.style.backgroundColor = this.color || this.defaultColor;

    this.isBold = true;
  }

  @HostListener("mouseleave")
  retirerFluo() {
    this.element.nativeElement.style.backgroundColor = null;

    this.isBold = false;
  }


  constructor(private element: ElementRef<HTMLElement>) {
    //element.nativeElement.style.backgroundColor = "yellow";
  }


}