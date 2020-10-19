import { LightningElement } from 'lwc';

export default class Timer extends LightningElement {
    isPlaying=false;

    changeevent(){
        this.isPlaying=!this.isPlaying;
    }
}