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
        this.startDate = new Date(this.startDate);
        this.endDate = new Date(this.endDate);
    }

    get start_date() {
        return moment(this.startDate).format('YYYY-MMM');
    }

    get end_date() {
        return moment(this.endDate).format('YYYY-MMM');
    }

    get props() {
        return {
            startDate: moment(this.startDate).toISOString(),
            endDate: moment(this.endDate).toISOString(),
            companyName: this.companyName,
            location: this.location,
            role: this.role,
            achievements: this.achievements
        };
    }
}
