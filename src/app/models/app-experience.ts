import * as moment from 'moment';

export class AppExperience {
    key: string;
    startDate: any;
    endDate: any;
    companyName: string;
    location: string;
    role: string;
    achievements: string;

    constructor(exp: Partial<AppExperience>) {
        Object.assign(this, exp);
    }

    get start_date() {
        return moment(this.startDate).format('YYYY-MMM');
    }

    get end_date() {
        return moment(this.endDate).format('YYYY-MMM');
    }

    get props() {
        return {
            startDate: this.startDate,
            endDate: this.endDate,
            companyName: this.companyName,
            location: this.location,
            role: this.role,
            achievements: this.achievements
        };
    }
}
