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
    // characters in the comic
    characters: string[];
    // comic plot
    plot: string;

    constructor(number: number, course: [string, string], title: string, writers: string[], artists: string[], links: {
        mathsoc_cartoons_insta: string,
        mathsoc_official_insta: string
    }, characters: string[], plot: string) {
        this.number = number;
        this.course = course;
        this.title = title;
        this.writers = writers;
        this.artists = artists;
        this.characters = characters;
        this.links = links;
        this.plot = plot;
    }
}
