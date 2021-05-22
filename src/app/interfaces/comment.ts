export interface Comment {
  	id: number;
	level: number;
	author: string;
	text: string;
	votes: number;
	date: Date;
	contributionId: number;
	contributionTitle: string;
	fatherId: number;
	replies: Array<Comment>;
}
