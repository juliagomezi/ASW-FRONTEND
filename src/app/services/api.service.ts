import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { FeedItem } from '../interfaces/feed-item';
import { Item } from '../interfaces/item';
import { User } from '../interfaces/user';
import { partitionArray } from '@angular/compiler/src/util';

export const API = 'https://node-hnapi.herokuapp.com';

const httpOptions = {
	headers: new HttpHeaders({
	  'Content-Type':  'application/json',
	  Authorization: '28fa7b86a55b4e005ea1803bffc631406ecfd91d'
	}),
	params: new HttpParams({})
  };

@Injectable({
  providedIn: 'root',
})
export class ApiService {
	constructor(private http: HttpClient) { }

	/*getSubmissions(id: string, type: string, filter: string): Observable<FeedItem[]> {
		console.log("getSubmissions");
		if (id != null) httpOptions.params = new HttpParams().set('id', id);
		else if (type != null) httpOptions.params = new HttpParams().set('type', type);
		else httpOptions.params = new HttpParams().set('filter', filter);

		return this.http.get<FeedItem[]>(`https://api-hackerbadnews.herokuapp.com/api/submissions`, httpOptions);
	}*/

	getSubmissionsPoints(): Observable<FeedItem[]> {
		console.log("getSubmissionsPoints");
		httpOptions.params = new HttpParams().set('filter', 'points');
		return this.http.get<FeedItem[]>(`https://api-hackerbadnews.herokuapp.com/api/submissions`, httpOptions);
	}

	getSubmissionsNews(): Observable<FeedItem[]> {
		console.log("getSubmissionsNews");
		httpOptions.params = new HttpParams().set('filter', 'news');
		return this.http.get<FeedItem[]>(`https://api-hackerbadnews.herokuapp.com/api/submissions`, httpOptions);
	}

	getSubmissionsUser(id: string): Observable<FeedItem[]> {
		console.log("getSubmissionsUser");
		httpOptions.params = new HttpParams().set('id', id['name']);
		console.log(id)
		return this.http.get<FeedItem[]>(`https://api-hackerbadnews.herokuapp.com/api/submissions`, httpOptions);
	}

	getSubmissionsAsk(): Observable<FeedItem[]> {
		console.log("getSubmissionsAsk");
		httpOptions.params = new HttpParams().set('type', 'ask');
		return this.http.get<FeedItem[]>(`https://api-hackerbadnews.herokuapp.com/api/submissions`, httpOptions);
	}

	getSubmission(id: number): Observable<Item> {
		console.log("getSubmission");
		return this.http.get<Item>(`https://api-hackerbadnews.herokuapp.com/api/submissions/{{id}}`, httpOptions);
	}

	getUser(name: string): Observable<User> {
		console.log("getUser");
		httpOptions.params = new HttpParams().set('id', name);
		return this.http.get<User>(`https://api-hackerbadnews.herokuapp.com/api/users`, httpOptions);
	}
}
