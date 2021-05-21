import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AbstractBaseListComponent } from '../../components/abstract-base-list/abstract-base-list.component';
import { ApiService } from '../../services/api.service';

@Component({
	selector: 'app-submissions',
	templateUrl: '../../components/abstract-base-list/abstract-base-list.component.html',
	styleUrls: ['../../components/abstract-base-list/abstract-base-list.component.scss'],
})

export class SubmissionsComponent extends AbstractBaseListComponent {
	routeName = 'submissions';
	routeTitle = 'Submissions';
	serviceMethod = 'getSubmissionsUser';

	constructor(
		titleService: Title,
		apiService: ApiService,
		route: ActivatedRoute,
	) {
		super(titleService, apiService, route);
	}

}
