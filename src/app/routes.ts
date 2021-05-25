import { Routes } from '@angular/router';

import { TopComponent } from './containers/top/top.component';
import { NewComponent } from './containers/new/new.component';
import { ShowComponent } from './containers/show/show.component';
import { AskComponent } from './containers/ask/ask.component';
import { SubmissionsComponent } from './containers/submissions/submissions.component';
import { ItemComponent } from './containers/item/item.component';
import { UserComponent } from './containers/user/user.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { SubmitComponent } from './containers/submit/submit.component';
import { ItemCommentComponent } from './containers/item-comment/item-comment.component';
import { FavouriteSubmissionsComponent } from './containers/favourite-submissions/favourite-submissions.component';
import { FavouriteCommentsComponent } from './containers/favourite-comments/favourite-comments.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'top', pathMatch: 'full' },

	// List views
	{ path: 'top', component: TopComponent },
	{ path: 'new', component: NewComponent },
	{ path: 'show', component: ShowComponent },
	{ path: 'ask', component: AskComponent },
	{ path: 'submissions', component: SubmissionsComponent },
	{ path: 'submissions/favourites/:id', component: FavouriteSubmissionsComponent },
	{ path: 'comments/favourites/:id', component: FavouriteCommentsComponent },

	// Detail views
	{ path: 'item/:id', component: ItemComponent },
	{ path: 'comment/:id', component: ItemCommentComponent },
	{ path: 'user/:name', component: UserComponent },
	{ path: 'submit', component: SubmitComponent },

	// Not found
	{ path: '**', component: NotFoundComponent },
];
