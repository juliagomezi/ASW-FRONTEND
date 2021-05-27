import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from 'src/app/services/api.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent {

  urlPattern = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  submitForm = this.formBuilder.group({
    title: ['', Validators.required],
    url: ['', Validators.pattern(this.urlPattern)],
    text: [''],
  }, {validator: this.atLeastOneRequired});


  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
  }

  onSubmit() {
    console.warn(this.submitForm.errors);
    if (this.submitForm.valid) {
      console.warn(this.submitForm.value);
      this.apiService.newSubmission(this.submitForm.value).subscribe(
        response => {
          this.router.navigate(['/new']);
        },
        err => {
          if (err.status === 302) {
            this.router.navigate(['/item', err.error.query[0].substring(49)]);
          }
        });
    }
  }

  atLeastOneRequired(control: AbstractControl): { [s: string]: boolean } | null {

    if (control.get('url').pristine && control.get('text').pristine) {
      return {'missing': true};
    }

    if (control.get('url').value || control.get('text').value) {
      return null;
    } else {
      return {'missing': true};
    }

  }

}
