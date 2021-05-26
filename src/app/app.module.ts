import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { routes } from './routes';
import { SentryErrorHandler } from './sentry';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';

// Container components
import { TopComponent } from './containers/top/top.component';
import { NewComponent } from './containers/new/new.component';
import { ShowComponent } from './containers/show/show.component';
import { ItemComponent } from './containers/item/item.component';
import { AskComponent } from './containers/ask/ask.component';
import { SubmitComponent } from './containers/submit/submit.component';
import { UserComponent } from './containers/user/user.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';

// Components
import { AppComponent } from './app.component';
import { AbstractBaseListComponent } from './components/abstract-base-list/abstract-base-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FeedItemComponent } from './components/feed-item/feed-item.component';
import { CommentComponent } from './components/comment/comment.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SubmissionsComponent } from './containers/submissions/submissions.component';
import { AbstractBaseListCommentsComponent } from './components/abstract-base-list-comments/abstract-base-list-comments.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';

// Pipes
import { DateFormatPipePipe } from './pipes/date-format-pipe.pipe';
import { ItemCommentComponent } from './containers/item-comment/item-comment.component';
import { FavouriteSubmissionsComponent } from './containers/favourite-submissions/favourite-submissions.component';
import { FavouriteCommentsComponent } from './containers/favourite-comments/favourite-comments.component'

@NgModule({
	declarations: [
		AppComponent,
		FeedItemComponent,
		HeaderComponent,
		NewComponent,
		TopComponent,
		ShowComponent,
		NotFoundComponent,
		ItemComponent,
		AskComponent,
		SubmitComponent,
		UserComponent,
		CommentComponent,
		PaginationComponent,
		AbstractBaseListComponent,
		SubmissionsComponent,
		AbstractBaseListCommentsComponent,
		CommentItemComponent,
  		DateFormatPipePipe,
		ItemCommentComponent,
		FavouriteSubmissionsComponent,
		FavouriteCommentsComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
		MatToolbarModule,
		MatButtonModule,
		MatCardModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatFormFieldModule,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
	],
	providers: [
		Title,
		{
		provide: ErrorHandler,
		useClass: environment.production ? SentryErrorHandler : ErrorHandler,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule { }
