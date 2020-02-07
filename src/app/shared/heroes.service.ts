import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const TEXT_INPUT = ['Eric'];

@Injectable({ providedIn: 'root' })
export class HeroesService {
  isAlterEgoTaken(alterEgo: string): Observable<boolean> {
    const isTaken = TEXT_INPUT.includes(textInput);

    return of(isTaken).pipe(delay(400));
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/