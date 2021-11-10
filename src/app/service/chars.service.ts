import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { charsConst } from '../const/chars.const';
import { CharacteristicModel } from '../model/characteristic.model';

@Injectable({
  providedIn: 'root'
})
export class CharsService {

  constructor() { }

  getChars(): Observable<CharacteristicModel[]>{
    return of(charsConst);
  }
}
