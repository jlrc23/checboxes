import { Component, OnInit } from '@angular/core';
import { CharsService } from '../service/chars.service';
import { ControlAbstract } from '../class/control-abstract';
import { provideMakersFunction, provideValidatorFunction } from '../utils/provide-makers.function';
import { Subject } from 'rxjs';
import { CharacteristicModel } from '../model/characteristic.model';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss'],
  providers: [
    provideMakersFunction(CharacteristicsComponent)
  ]
})
export class CharacteristicsComponent extends ControlAbstract<CharacteristicModel[]>  implements OnInit {
  private charsBankSubject = new Subject<CharacteristicModel[]>();
  chars: any[];
  characteristicsControls: FormArray;
  reserverdChars: CharacteristicModel[];
  subscriptions = [];

  constructor(public charsService: CharsService) {
    super();
  }

  ngOnInit(): void {
    this.loadChars();
   }

  loadChars(): void {
    this.charsService.getChars().subscribe(chars =>{
      this.charsBankSubject.next(chars);
      this.characteristicsControls  =  new FormArray(
        chars.map((char, i) => {
          const result = new FormGroup({
            id: new FormControl({value: char.id, disabled: true}),
            selected: new FormControl(char.checked),
            notReportabled: new FormControl(false ),
            isElement: new FormControl(char.isElementByDefault),
            alias: new FormControl(char.alias),
          });

          const isSelectClosure = (selected: boolean) => {
            if(selected){
              result.get('notReportabled').enable();
              result.get('alias').enable();
              if(!char.isElementByDefault){
                result.get('isElement').enable();
              }
            }else{
              result.get('notReportabled').disable();
              result.get('alias').disable();
              result.get('isElement').disable();
            }
          }
          result.get('selected').valueChanges.subscribe(isSelectClosure);
          isSelectClosure(char.checked);
          return result;
        })
      );
      this.chars = chars;
      this.characteristicsControls.valueChanges.subscribe(value => {
        this.setValue(value);
      });
    });
  }



}
