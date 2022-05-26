export default class Comic {
    // comic number
    number: number;
    // comic course = [subjectCode, catalogNumber]
    course: [string, string];
    // comic title
    title: string;
    // comic writers
    writers: string[];
    // comic artists
    artists: string[];
    // comic links
    links: {
        // mathsoc cartoons instagram
        mathsoc_cartoons_insta: string;
        // mathsoc official instagram
        mathsoc_official_insta: string;
    }
    // comic due dates
    dates: {
        // formatted using ISO 8601
        // sketch due date
        sketch_due_date: string;
        // rough draft due date
        rough_draft_due_date: string;
        // final artwork due date
        final_artwork_due_date: string;
        // mathnews production night
        mathnews_production_night: string;
        // publishing date
        publishing_date: string;
    }

    constructor(number: number, course: [string, string], title: string, writers: string[], artists: string[], links: {
        mathsoc_cartoons_insta: string,
        mathsoc_official_insta: string
    },
    dates: {
        sketch_due_date: string,
        rough_draft_due_date: string,
        final_artwork_due_date: string,
        mathnews_production_night: string,
        publishing_date: string
    }) {
        this.number = number;
        this.course = course;
        this.title = title;
        this.writers = writers;
        this.artists = artists;
        this.links = links;
        this.dates = dates;
    }
}
