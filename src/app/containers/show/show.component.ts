import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AbstractBaseListCommentsComponent } from '../../components/abstract-base-list-comments/abstract-base-list-comments.component';
import { ApiService } from '../../services/api.service';

@Component({
	selector: 'app-show',
	templateUrl: '../../components/abstract-base-list-comments/abstract-base-list-comments.component.html',
	styleUrls: ['../../components/abstract-base-list-comments/abstract-base-list-comments.component.scss'],
})

export class ShowComponent extends AbstractBaseListCommentsComponent {
	routeName = 'show';
	routeTitle = 'Show';
	serviceMethod = 'getCommentsUser';

	constructor(
		titleService: Title,
		apiService: ApiService,
		route: ActivatedRoute,
	) {
		super(titleService, apiService, route);
	}
}
