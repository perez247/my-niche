import * as moment from 'moment';

export class AppEducation {
    key: string;
    startDate: any;
    endDate: any;
    institution: string;
    location: string;
    courseOfStudy: string;
    grade: string;

    constructor(exp: Partial<AppEducation>) {
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
            institution: this.institution,
            location: this.location,
            courseOfStudy: this.courseOfStudy,
            grade: this.grade
        };
    }
}
