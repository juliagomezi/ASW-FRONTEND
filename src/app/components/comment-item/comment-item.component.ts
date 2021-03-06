import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

import { Config } from '../../config';
import { Comment } from '../../interfaces/comment';

@Component({
	selector: 'app-comment-item',
	templateUrl: './comment-item.component.html',
	styleUrls: ['./comment-item.component.scss']
})

export class CommentItemComponent {
	@Input() item: Comment;
	@Input() favouriteItems: Comment[];
	dateFormat = Config.dateFormat;
	commentsMapping = Config.commentsMapping;
	pointsMapping = Config.pointsMapping;

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
			this.item.votes++;
		})
	}

	unvote(id: number) {
		this.apiService.unvoteComment(id).subscribe(e => {
			for (var i = 0; i < this.favouriteItems.length; i++){ 
				if (this.favouriteItems[i].id == e.id) { 
					this.favouriteItems.splice(i, 1); 
					this.item.votes--;
				}
			}
		})
	}
}
