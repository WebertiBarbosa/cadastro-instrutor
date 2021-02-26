import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[especialidadeColor]'
})
export class EspecialidadeColorDirective {

  @Input()
  especialidadeColor

  constructor(private element: ElementRef) { 
    this.element.nativeElement.innerHTML = this.especialidadeColor? 'teste' : 'Musculação'
  }

}
