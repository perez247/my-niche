import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import * as _ from 'lodash';

export class DateValidator {

    static invalidDate(c: AbstractControl): ValidationErrors | null {

        if (!moment(c.value, moment.ISO_8601, true).isValid()) {
        return {invalidDateFormat: true};
        }

        return null;
    }

    static notFuture(c: AbstractControl): ValidationErrors | null {

        if (moment().isBefore(moment(c.value, moment.ISO_8601, true))) {
            return {invalidDateLogic: true};
        }

        return null;
    }

    static compareDates(g: AbstractControl): ValidationErrors | null {
        if (
            g.parent === undefined ||
            !moment(g.parent.get('startDate').value, moment.ISO_8601, true).isValid() ||
            !moment(g.parent.get('endDate').value, moment.ISO_8601, true).isValid()
            ) { return null; }

        const startDate = g.parent.get('startDate');
        const endDate = g.parent.get('endDate');

        if (moment(endDate.value).isBefore(moment(startDate.value))) {
            return {invalidStartEnd: true};
         }
         return null;
    }

    // static hackFix(c: AbstractControl): {state, value?} {

    //     if (typeof c.value !== 'object' || !['year', 'month', 'day'].every(p => p in c.value)) {
    //         return { state: false};
    //      }

    //     //  const value = DateValidator.rM(c.value);
    //      const value = c.value;
    //      return {state: true, value};
    // }

    // static rM(c) { // rM = Reduce Month
    //     return { year: c.year, month: (c.month - 1), day: c.day };
    // }

    // static aM(c) { // aM = Add Month
    //     return { year: c.year, month: (c.month + 1), day: c.day };
    // }

    // // static dateDiffs
}
