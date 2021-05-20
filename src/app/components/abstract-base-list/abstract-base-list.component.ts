import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { Config } from '../../config';
import { FeedItem } from '../../interfaces/feed-item';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-abstract--base-list',
  templateUrl: './abstract-base-list.component.html',
  styleUrls: ['./abstract-base-list.component.scss'],
})
export class AbstractBaseListComponent implements OnInit {
	items$: Observable<FeedItem[]>;
	routeName: string;
	routeTitle: string;
	serviceMethod: string;

	constructor(
		private titleService: Title,
		private apiService: ApiService,
		private router: Router,
		private route: ActivatedRoute,
	) { }

	ngOnInit() {

		// Update the title
		this.titleService.setTitle(Config.getTitle(this.routeTitle));

		console.log(this.serviceMethod)
		this.route.params.subscribe(params => {
			// Get the current feed items by passing the service method (top, new, .etc)
			if (typeof this.apiService[this.serviceMethod] === 'function') {
				this.items$ = this.apiService[this.serviceMethod](params);
			}
		});
	}

}
