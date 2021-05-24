import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Config } from '../../config';
import { User } from '../../interfaces/user';
import { ApiService,  currentUser, APIKey } from '../../services/api.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss'],
})

export class UserComponent implements OnInit {
	user: User;
	dateFormat = Config.dateFormat;

	updateForm: FormGroup = new FormGroup({
		about: new FormControl('')
	});

	constructor(
		private titleService: Title,
		private apiService: ApiService,
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.apiService.getUser(params.name).subscribe((data: User) => {
				this.user = data;
				this.titleService.setTitle(Config.getTitle(data.username));
				this.updateForm.setValue({
					about: this.user?.about,
				});
			});
		});
	}

	isCurrentUser() {
		if (this.user?.username == currentUser) return true;
		return false;
	}

	getCurrentUserAPIKey() {
		return APIKey;
	}

	onSubmit() {
		this.updateForm.value.username = this.user.username;
		this.updateForm.value.email = this.user.email;
		this.updateForm.value.karma = this.user.karma;
		this.updateForm.value.created = this.user.created;
		console.warn(this.updateForm.value);
		this.apiService.updateUser(this.updateForm.value).subscribe(e => {
			this.user = e;
		});
	}

}
