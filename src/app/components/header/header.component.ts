import { Component } from '@angular/core';

import { NavItem } from '../../interfaces/nav-item';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	navItems: NavItem[] = [
		{ title: 'Hacker News', link: 'top' },
		{ title: 'New', link: 'new' },
		{ title: 'Threads', link: 'show' },
		{ title: 'Ask', link: 'ask' },
		{ title: 'Submit', link: 'submit' },
	];
}
