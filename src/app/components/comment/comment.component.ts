import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Config } from '../../config';

import { Comment } from '../../interfaces/comment';

@Component({
	selector: 'app-comment',
	templateUrl: './comment.component.html',
	styleUrls: ['./comment.component.scss'],
})

export class CommentComponent {
	@Input() comment: Comment;
	@Input() favouriteItems: Comment[];
	dateFormat = Config.dateFormat;

	constructor(private apiService: ApiService) { }

	isFavourite(id: number) {
		for(let fav of this.favouriteItems) {
			if (fav.id == id) return true;
		}
		return false;
	}

	vote(id: number) {
		this.apiService.voteComment(id).subscribe(e => {
			this.favouriteItems.push(e);
		})
	}

	unvote(id: number) {
		this.apiService.unvoteComment(id).subscribe(e => {
			for( var i = 0; i < this.favouriteItems.length; i++){ 
				if ( this.favouriteItems[i].id == e.id) { 
					this.favouriteItems.splice(i, 1); 
				}
			}
		})
	}
}
