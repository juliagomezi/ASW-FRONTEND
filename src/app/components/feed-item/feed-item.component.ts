import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

import { Config } from '../../config';
import { FeedItem } from '../../interfaces/feed-item';

@Component({
	selector: 'app-feed-item',
	templateUrl: './feed-item.component.html',
	styleUrls: ['./feed-item.component.scss'],
})

export class FeedItemComponent  {
	@Input() item: FeedItem;
	@Input() favouriteItems: FeedItem[];
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
		this.apiService.voteSubmission(id).subscribe(e => {
			this.favouriteItems.push(e);
			this.item.points++;
		})
	}

	unvote(id: number) {
		this.apiService.unvoteSubmission(id).subscribe(e => {
			for( var i = 0; i < this.favouriteItems.length; i++){ 
				if ( this.favouriteItems[i].id == e.id) { 
					this.favouriteItems.splice(i, 1); 
					this.item.points--;

				}
			}
		})
	}

}
