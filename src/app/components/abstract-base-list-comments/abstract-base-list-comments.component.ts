import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { Config } from '../../config';
import { Comment } from '../../interfaces/comment';
import { ApiService } from '../../services/api.service';

@Component({
	selector: 'app-abstract-base-list-comments',
	templateUrl: './abstract-base-list-comments.component.html',
	styleUrls: ['./abstract-base-list-comments.component.scss']
})

export class AbstractBaseListCommentsComponent implements OnInit {
	items$: Observable<Comment[]>;
	favouriteItems: Comment[];
	routeName: string;
	routeTitle: string;
	serviceMethod: string;

	constructor(
		private titleService: Title,
		private apiService: ApiService,
		private route: ActivatedRoute,
	) { }

	ngOnInit() {

		// Update the title
		this.titleService.setTitle(Config.getTitle(this.routeTitle));

		console.log(this.serviceMethod)
		// this.route.params user/:id
		// this.route.queryParams user?id={id}
		this.route.queryParams.subscribe(params => {
			// Get the current feed items by passing the service method (top, new, .etc)
			if (typeof this.apiService[this.serviceMethod] === 'function') {
				this.items$ = this.apiService[this.serviceMethod](params);
			}
		});

		this.apiService.getFavouriteComments().subscribe(e => {
			this.favouriteItems = e;
		})
	}

}
