import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {

	submitForm = this.formBuilder.group({
		title: '',
		url: '',
		text: ''
	});

	constructor(
		private formBuilder: FormBuilder,
		private apiService: ApiService
	) {}

	onSubmit(): void {
		console.warn(this.submitForm.value);
		this.apiService.newSubmission(this.submitForm.value).subscribe(e => {
			console.log(e);
		})

	}

	ngOnInit(): void {
	}

}
