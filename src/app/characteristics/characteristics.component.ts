import { Component, OnInit, ViewChild } from '@angular/core';
import { CharsService } from '../service/chars.service';
import { ControlAbstract } from '../class/control-abstract';
import { provideMakersFunction, provideValidatorFunction } from '../utils/provide-makers.function';
import { CharacteristicModel } from '../model/characteristic.model';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss'],
  providers: [
    provideMakersFunction(CharacteristicsComponent)
  ]
})
export class CharacteristicsComponent extends ControlAbstract<CharacteristicModel[]>  implements OnInit {
  displayedColumns = [ "selected", "id", "name", "notReportabled", "isElement", "alias"];
  chars: any[];
  frmChars: FormGroup;
  dataSource: MatTableDataSource<AbstractControl>;
  @ViewChild('paginator', { static: true }) paginator!: MatPaginator;

  constructor(public charsService: CharsService) { super(); }

  ngOnInit(): void {  this.loadChars(); }

  loadChars(): void {
    this.charsService.getChars().subscribe(chars =>{
      this.frmChars = this.prepareForm(chars);
      const frmArrayChars = this.frmChars.get('chars') as FormArray;
      this.dataSource = new MatTableDataSource<AbstractControl>(frmArrayChars.controls);
      this.dataSource.paginator = this.paginator;
      this.chars = chars;
      this.frmChars.valueChanges.subscribe(event => this.setValue(event));
    });
  }


  prepareForm(chars: CharacteristicModel[]):FormGroup{
    const result = new FormGroup({
      chars: this.prepareFormArray(chars)
   });
    return result;
  }

  prepareFormArray(chars: CharacteristicModel[]): FormArray {
    return new FormArray( chars.map((char, i) => {
      const frmChar = this.prepareFrmChar(char);
      frmChar.get('selected').valueChanges.subscribe(event=>this.selectCharEvent(event, char, frmChar));
      this.selectCharEvent(char.checked, char, frmChar);
      return frmChar;
    }));
  }

  prepareFrmChar(char: CharacteristicModel): FormGroup {
    return new FormGroup({
      id: new FormControl({value: char.id, disabled: true}),
      selected: new FormControl(char.checked),
      notReportabled: new FormControl(false ),
      isElement: new FormControl(char.isElementByDefault),
      alias: new FormControl(char.alias),
    });
  }

  selectCharEvent(selected: boolean,char:CharacteristicModel, frmChar: FormGroup): void {
    if(selected){
      frmChar.get('notReportabled').enable();
      frmChar.get('alias').enable();
      if(!char.isElementByDefault){
        frmChar.get('isElement').enable();
      }
    }else{
      frmChar.get('notReportabled').disable();
      frmChar.get('alias').disable();
      frmChar.get('isElement').disable();
    }
  }



}
