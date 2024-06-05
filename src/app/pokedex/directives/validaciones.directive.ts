import { Directive, ElementRef, Input, inject, input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[PokedexValidaciones]'
})
export class ValidacionesDirective {

  private htmlElement ?: ElementRef<HTMLElement>;
  constructor(private element : ElementRef<HTMLElement>){this.htmlElement = element}

  public errores ?: ValidationErrors | null | undefined; 
  public touched ?: boolean;
  
  @Input() set Errores(value : ValidationErrors | null | undefined){
    this.errores = value;
    this.validaciones()
  }
  @Input() set Touched(value : boolean){
    this.touched = value;
    this.validaciones()
  }

  private validaciones():void{
    if(!this.htmlElement) return;
    if(this.touched == false || (this.touched == true && !this.errores)) {
      this.htmlElement.nativeElement.innerText = 'Busca Un Pokemon Por su nombre...'
      this.htmlElement.nativeElement.style.color = 'black';
      return;
    }

    if(!this.errores){return;}

    const errors = Object.keys(this.errores)

    if(errors.includes('required')){
      this.htmlElement.nativeElement.innerText = 'Escribe el nombre del pokemon en el recuadro y presiona buscar'
      this.htmlElement.nativeElement.style.color = 'black'
    }
  
  }
  
}
