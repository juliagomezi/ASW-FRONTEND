import { Component, Input } from '@angular/core';
import { Config } from '../../config';

import { Comment } from '../../interfaces/comment';

@Component({
	selector: 'app-comment',
	templateUrl: './comment.component.html',
	styleUrls: ['./comment.component.scss'],
})

export class CommentComponent {
	@Input() comment: Comment;
	dateFormat = Config.dateFormat;
}
