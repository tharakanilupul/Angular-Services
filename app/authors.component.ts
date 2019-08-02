import {Component} from "angular2/core";
import {AuthorService} from "./author.service";

@Component ({
    selector: 'authors',
    template: `
        <h2>Authors</h2>
        <p>{{ title }}</p>
        <ul>
            <li *ngFor="#author of authors">
                {{ author }}
            </li>
        </ul>
    `,
    providers: [AuthorService]
})

export class AuthorsComponent {
    title = "here is the Author titles";
    //authors = ["Author1", "Author2", "Author3"];
    authors;

    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }
}