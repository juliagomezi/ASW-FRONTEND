import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Config } from '../../config';
import { FeedItem } from '../../interfaces/feed-item';
import { ApiService } from '../../services/api.service';

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
	item: FeedItem;
	favouriteItems: FeedItem[]
	dateFormat = Config.dateFormat;
	pointsMapping = Config.pointsMapping;
	commentsMapping = Config.commentsMapping;

	constructor(
		private titleService: Title,
		private apiService: ApiService,
		private route: ActivatedRoute,
	) {}

	ngOnInit() {
		this.route.params.subscribe((params: ParamMap) => {
		this.apiService.getSubmission(params['id']).subscribe(e => {
				this.item = e;
				this.titleService.setTitle(Config.getTitle(e.title));
			});
		});
		this.apiService.getFavouriteSubmissions().subscribe(e => {
			this.favouriteItems = e;
		});
	}

	isFavourite(id: number) {
		for(let fav of this.favouriteItems) {
			if (fav.id == id) return true;
		}
		return false;
	}

	vote(id: number) {
		this.apiService.voteSubmission(id).subscribe(e => {
			this.favouriteItems.push(e);
		})
	}

	unvote(id: number) {
		this.apiService.unvoteSubmission(id).subscribe(e => {
			for( var i = 0; i < this.favouriteItems.length; i++){ 
				if ( this.favouriteItems[i].id == e.id) { 
					this.favouriteItems.splice(i, 1); 
				}
			}
		})
	}
}
