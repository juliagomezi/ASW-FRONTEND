import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent {

	submitForm = this.formBuilder.group({
		title: '',
		url: '',
		text: ''
	});

	constructor(
		private formBuilder: FormBuilder,
		private apiService: ApiService,
		private router: Router
	) {}

	onSubmit() {
		console.warn(this.submitForm.value);
		if (this.submitForm.valid) {
			this.apiService.newSubmission(this.submitForm.value)
				.subscribe(
					response => {
						this.router.navigate(['/new']);
					},
					err => {
						if (err.status == 302) {
							this.router.navigate(['/item', err.error.query[0].substring(49)]);
						}
					});
		}
	}


}
