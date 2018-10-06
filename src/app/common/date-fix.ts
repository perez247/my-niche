import * as moment from 'moment';

export class DateFix {
    static addMonth(obj) {
        obj.startDate = moment(obj.startDate).add(1, 'month').toObject();
        obj.endDate = moment(obj.endDate).add(1, 'month').toObject();
        return obj;
    }

    static subtractMonth(obj) {
        obj.startDate = moment(obj.startDate).subtract(1, 'month').toObject();
        obj.endDate = moment(obj.endDate).subtract(1, 'month').toObject();
        return obj;
    }
}
