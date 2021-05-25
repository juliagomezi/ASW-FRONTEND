import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Config } from 'src/app/config';
import { FeedItem } from 'src/app/interfaces/feed-item';
import { ApiService } from 'src/app/services/api.service';
import { Comment } from '../../interfaces/comment'

@Component({
  selector: 'app-item-comment',
  templateUrl: './item-comment.component.html',
  styleUrls: ['./item-comment.component.scss']
})
export class ItemCommentComponent implements OnInit {
	item: Comment;
	favouriteItems: Comment[]
	dateFormat = Config.dateFormat;
	pointsMapping = Config.pointsMapping;
	commentsMapping = Config.commentsMapping;

	replyForm = this.formBuilder.group({
		text: ''
	});

	constructor(
		private apiService: ApiService,
		private route: ActivatedRoute,
		private router: Router,
		private formBuilder: FormBuilder,
	) {}

	ngOnInit() {
		this.route.params.subscribe((params: ParamMap) => {
		this.apiService.getComment(params['id']).subscribe(e => {
				this.item = e;
			});
		});
		this.apiService.getFavouriteComments().subscribe(e => {
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

	onSubmit(id: number) {
		this.apiService.commentComment(id, this.replyForm.value).subscribe(e => {
			if (!this.item?.replies) {
				var replies: Comment[] = [];
				this.item.replies = replies;
			}
			this.item?.replies?.push(e);
		})
	}

}
