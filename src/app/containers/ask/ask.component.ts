import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AbstractBaseListComponent } from '../../components/abstract-base-list/abstract-base-list.component';
import { ApiService } from '../../services/api.service';

@Component({
	selector: 'app-ask',
	templateUrl: '../../components/abstract-base-list/abstract-base-list.component.html',
	styleUrls: ['../../components/abstract-base-list/abstract-base-list.component.scss'],
})

export class AskComponent extends AbstractBaseListComponent {
	routeName = 'ask';
	routeTitle = 'Ask';
	serviceMethod = 'getSubmissionsAsk';

	constructor(
		titleService: Title,
		apiService: ApiService,
		route: ActivatedRoute,
	) {
		super(titleService, apiService, route);
	}
}
