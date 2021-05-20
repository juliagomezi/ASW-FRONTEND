export interface Item {
	/*id: number;
	title: string;
	points: number;
	user: string;
	time: number;
	time_ago: string;
	content: string;
	deleted?: boolean;
	dead?: boolean;
	type: string;
	url?: string;
	domain?: string;
	comments: Item[];
	level: number;
	comments_count: number;*/

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
