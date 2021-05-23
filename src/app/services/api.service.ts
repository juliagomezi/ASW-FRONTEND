import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { FeedItem } from '../interfaces/feed-item';
import { Comment } from '../interfaces/comment';
import { User } from '../interfaces/user';

export const API = 'https://api-hackerbadnews.herokuapp.com/api';
export const currentUser = 'sergi'
export const APIKey = '2ee65c012885efab362272540aab4f80017af3ef'

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type':  'application/json',
		Authorization: '2ee65c012885efab362272540aab4f80017af3ef'
	}),
	params: new HttpParams({})
  };

@Injectable({
  providedIn: 'root',
})
export class ApiService {
	constructor(private http: HttpClient) { }

	getSubmissionsPoints(): Observable<FeedItem[]> {
		console.log("getSubmissionsPoints");
		httpOptions.params = new HttpParams().set('filter', 'points');
		return this.http.get<FeedItem[]>(`${API}/submissions`, httpOptions);
	}

	getSubmissionsNews(): Observable<FeedItem[]> {
		console.log("getSubmissionsNews");
		httpOptions.params = new HttpParams().set('filter', 'news');
		return this.http.get<FeedItem[]>(`${API}/submissions`, httpOptions);
	}

	getSubmissionsUser(id: string): Observable<FeedItem[]> {
		console.log("getSubmissionsUser");
		httpOptions.params = new HttpParams().set('id', id['id']);
		return this.http.get<FeedItem[]>(`${API}/submissions`, httpOptions);
	}

	getFavouriteSubmissions(): Observable<FeedItem[]> {
		console.log("getFavouriteSubmissions");
		httpOptions.params = new HttpParams().set('id', currentUser);
		return this.http.get<FeedItem[]>(`${API}/submissions/favourites`, httpOptions);
	}

	getFavouriteComments(): Observable<Comment[]> {
		console.log("getFavouriteComments");
		httpOptions.params = new HttpParams().set('id', currentUser);
		return this.http.get<Comment[]>(`${API}/comments/favourites`, httpOptions);
	}

	getSubmissionsAsk(): Observable<FeedItem[]> {
		console.log("getSubmissionsAsk");
		httpOptions.params = new HttpParams().set('type', 'ask');
		return this.http.get<FeedItem[]>(`${API}/submissions`, httpOptions);
	}

	getSubmission(id: number): Observable<FeedItem> {
		console.log("getSubmission");
		httpOptions.params = new HttpParams();
		return this.http.get<FeedItem>(`${API}/submissions/${id}`, httpOptions);
	}

	getCommentsUser(id: string): Observable<Comment[]> {
		console.log("getCommentsUser");
		httpOptions.params = new HttpParams().set('id', id['id']);
		return this.http.get<Comment[]>(`${API}/comments`, httpOptions);
	}

	getUser(name: string): Observable<User> {
		console.log("getUser");
		httpOptions.params = new HttpParams().set('id', name);
		return this.http.get<User>(`${API}/users`, httpOptions);
	}

	voteSubmission(id: number): Observable<FeedItem> {
		console.log("voteSubmission");
		httpOptions.params = new HttpParams();
		return this.http.post<FeedItem>(`${API}/submissions/${id}/vote`, null, httpOptions)
	}

	unvoteSubmission(id: number): Observable<FeedItem> {
		console.log("unvoteSubmission");
		httpOptions.params = new HttpParams();
		return this.http.delete<FeedItem>(`${API}/submissions/${id}/vote`, httpOptions);
	}

	voteComment(id: number): Observable<Comment> {
		console.log("voteComment");
		httpOptions.params = new HttpParams();
		return this.http.post<Comment>(`${API}/comments/${id}/vote`, null, httpOptions)
	}

	unvoteComment(id: number): Observable<Comment> {
		console.log("unvoteComment");
		httpOptions.params = new HttpParams();
		return this.http.delete<Comment>(`${API}/comments/${id}/vote`, httpOptions);
	}

	newSubmission(body: any): Observable<FeedItem> {
		console.log("newSubmission");
		httpOptions.params = new HttpParams();
		return this.http.post<FeedItem>(`${API}/submissions`, body, httpOptions)
	}
}
