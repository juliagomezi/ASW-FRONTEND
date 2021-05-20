import {Comment } from './comment'

export interface FeedItem {
	/*id: number;
	title: string;
	points?: number;
	user?: string;
	time: number;
	time_ago: string;
	comments_count: number;
	type: string;
	url?: string;
	domain?: string;*/

  	id: number;
	title: string;
	type: string;
	url?: string;
	text?: string;
	date: Date;
	points: number;
	author?: string;
	comments: Array<Comment>;
}
