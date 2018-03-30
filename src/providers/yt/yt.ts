import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()
export class YtProvider {
  apiKey = 'AIzaSyB7p6DHFQI_3BPvu8YEiUwxI5SWoJ1thT0';
  constructor(public http: Http) {
  }
  getQueryVideos(query) {
    return this.http.get('https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&q=' + query +'&part=snippet,id&maxResults=20')
     .map(response => {
     	console.log(response.json());
	    return response.json();
	}).toPromise();
  }

}
