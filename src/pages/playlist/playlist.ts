import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

/**
 * Generated class for the PlaylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html',
  providers : [YoutubeVideoPlayer]
})
export class PlaylistPage {
  videoId : string;
  constructor(private youtube: YoutubeVideoPlayer,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  	this.videoId = this.navParams.get('id');
  	console.log(this.youtube.openVideo(this.videoId));
    console.log(this.youtube);
    
  }

}
