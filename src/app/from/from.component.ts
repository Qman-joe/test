/* tslint:disable: member-ordering forin */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/forbidden-name.directive';
import { identityRevealedValidator } from '../shared/identity-revealed.directive';
import { UniqueAlterEgoValidator } from '../shared/alter-ego.directive';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss'],
})
export class FromComponent implements OnInit {

  selects = ['Option 1', 'Option 2', 'Option 3'];

  hero = { Lname: '', Fname: '', textInput: 'Testing...', select: this.selects[0]};

  testForm: FormGroup;

  ngOnInit(): void {
    this.testForm = new FormGroup({
      'Lname': new FormControl(this.hero.Lname, [
        Validators.required,
        Validators.minLength(3),
        forbiddenNameValidator(/bob/i)
      ]),
      'Fname': new FormControl(this.hero.Fname, [
        Validators.required,
        Validators.minLength(3),
        forbiddenNameValidator(/bob/i)
      ]),
      'textInput': new FormControl(this.hero.textInput, {
        asyncValidators: [this.alterEgoValidator.validate.bind(this.alterEgoValidator)],
        updateOn: 'blur'
      }),
      'select': new FormControl(this.hero.select, Validators.required),
      
    },  { validators: identityRevealedValidator }); 
    
    // <-- add custom validator at the FormGroup level
  }

  get Lname() {  return this.testForm.get('Lname'); }

  get Fname() { return this.testForm.get('Fname'); }

  get select() { return this.testForm.get('select'); }

  get textInput() { return this.testForm.get('textInput'); }

  constructor(private alterEgoValidator: UniqueAlterEgoValidator) { }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/