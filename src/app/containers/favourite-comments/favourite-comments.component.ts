import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AbstractBaseListCommentsComponent } from 'src/app/components/abstract-base-list-comments/abstract-base-list-comments.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-favourite-comments',
	templateUrl: '../../components/abstract-base-list-comments/abstract-base-list-comments.component.html',
	styleUrls: ['../../components/abstract-base-list-comments/abstract-base-list-comments.component.scss'],
})
export class FavouriteCommentsComponent extends AbstractBaseListCommentsComponent {

	routeName = 'favourite-comments';
	routeTitle = 'FavouriteComments';
	serviceMethod = 'getFavouriteComments';

	constructor(
		titleService: Title,
		apiService: ApiService,
		route: ActivatedRoute,
	) {
		super(titleService, apiService, route);
	}

}
