export interface User {
	/*about?: string;
	created_time: number;
	created: string;
	id: string;
	karma: number;*/
	username: string;
	email: string;
	karma: number;
	about?: string;
	created: Date;
}
