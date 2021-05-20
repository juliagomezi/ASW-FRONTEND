import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


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
	) {}

	onSubmit(): void {
		// Process checkout data here
		console.warn('Your order has been submitted', this.submitForm.value);
	}

	ngOnInit(): void {
	}

}
