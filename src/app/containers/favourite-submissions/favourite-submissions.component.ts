import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AbstractBaseListComponent } from 'src/app/components/abstract-base-list/abstract-base-list.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-favourite-submissions',
	templateUrl: '../../components/abstract-base-list/abstract-base-list.component.html',
	styleUrls: ['../../components/abstract-base-list/abstract-base-list.component.scss'],
})
export class FavouriteSubmissionsComponent extends AbstractBaseListComponent {

	routeName = 'favourite-submissions';
	routeTitle = 'FavouriteSubmissions';
	serviceMethod = 'getFavouriteSubmissions';

	constructor(
		titleService: Title,
		apiService: ApiService,
		route: ActivatedRoute,
	) {
		super(titleService, apiService, route);
	}

}
