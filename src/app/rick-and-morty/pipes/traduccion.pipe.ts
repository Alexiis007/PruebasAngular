import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'traduccion'
})
export class TraduccionPipe implements PipeTransform {

  transform(value: string): string {
    switch (value)
    {
      case 'ALIVE':
        return 'Personaje aun Vivo'
        break
      case 'DEAD':
        return 'Personaje Muerto'
        break
      case 'ALIEN':
        return 'De la raza Alienigena'
        break
      case 'HUMAN':
        return 'De la raza Humano'
        break
      case 'MALE':
        return 'Hombre'
        break
      case 'FEMALE':
        return 'Mujer'
        break
      case 'UNKNOWN':
        return 'Dato - Desconocido'
        break
    }
    return value;
  }

}
