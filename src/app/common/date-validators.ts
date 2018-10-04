import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import * as _ from 'lodash';

export class DateValidator {

    static invalidDate(c: AbstractControl): ValidationErrors | null {
        const state = DateValidator.hackFix(c);
        if (!state.state || !moment(c.value).isValid) {
        return {invalidDateFormat: true};
        }

        if (moment().isBefore(moment(state.value))) {
            return {invalidDateLogic: true};
        }

        return null;
    }

    static compareDates(g: AbstractControl): ValidationErrors | null {
        if (
            g.parent === undefined ||
            typeof g.parent.get('startDate').value !== 'object' ||
            typeof g.parent.get('endDate').value !== 'object'
            ) { return null; }

        const startDate = g.parent.get('startDate');
        const endDate = g.parent.get('endDate');

        if (moment(endDate.value).isBefore(moment(startDate.value))) {
            return {invalidStartEnd: true};
         }
         return null;
    }

    static hackFix(c: AbstractControl): {state, value?} {

        if (typeof c.value !== 'object' || !['year', 'month', 'day'].every(p => p in c.value)) {
            return { state: false};
         }

         c = DateValidator.rM(c);
         return {state: true, value: c.value};
    }

    static rM(c: AbstractControl) { // rM = Reduce Month
        c.value.month = c.value.month - 1;
        return c;
    }

    // static dateDiffs
}
