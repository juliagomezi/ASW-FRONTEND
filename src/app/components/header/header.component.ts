import { Component } from '@angular/core';
import { ApiService, currentUser } from 'src/app/services/api.service';

import { NavItem } from '../../interfaces/nav-item';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

	constructor(private apiService: ApiService) { }

	navItems: NavItem[] = [
		{ title: 'Hacker News', link: 'top' , params: '' },
		{ title: 'New', link: 'new', params: '' },
		{ title: 'Threads', link: 'show', params: {'id': currentUser} },
		{ title: 'Ask', link: 'ask', params: '' },
		{ title: 'Submit', link: 'submit', params: '' },
	];
}
