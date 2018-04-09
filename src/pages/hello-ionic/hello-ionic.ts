import { Component } from '@angular/core';
import { YtProvider } from './../../providers/yt/yt';
import { Observable } from 'rxjs/Observable';
import { PlaylistPage } from '../playlist/playlist';
import { NavController, AlertController} from 'ionic-angular';
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
  providers : [YtProvider]
})
export class HelloIonicPage {
  playlists: any = [];
  query : string;
  constructor(public navCtrl: NavController, private ytProvider: YtProvider, private alertCtrl: AlertController) { }
 
  searchPlaylists() {
  	//this.ytProvider.getQueryVideos('test');
    this.ytProvider.getQueryVideos(this.query).then(data =>{
    	this.playlists =  data;
    });
    
  }
  openVideo(id){
  	this.navCtrl.push(PlaylistPage, {id: id});
  }
}
