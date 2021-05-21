import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AbstractBaseListComponent } from '../../components/abstract-base-list/abstract-base-list.component';
import { ApiService } from '../../services/api.service';

@Component({
	selector: 'app-show',
	templateUrl: '../../components/abstract-base-list/abstract-base-list.component.html',
	styleUrls: ['../../components/abstract-base-list/abstract-base-list.component.scss'],
})

export class ShowComponent extends AbstractBaseListComponent {
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
