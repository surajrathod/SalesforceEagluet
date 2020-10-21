import { LightningElement,api ,track } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class Timer extends LightningElement {
    @api focusTimeValue
    @api mode
     
    @track Seconds=0;
    @track Minute=0;

    playing = false;
    countdown = null;
    timerId = null;
    modeBoolean

    connectedCallback(){
        this.Minute=this.focusTimeValue;
        this.getmode();
    }
    
  counter () {
    if (!this.playing) {
      clearInterval(this.timerId)
      return
    }
    // this will work for only initial
    // when the countdown is null
    // this is for the functionality of pauseTimer
    if (this.countdown == null) {
      this.countdown = this.focusTimeValue * 60 * 1000
    }
    this.timerId = setInterval(() => {
      if (this.playing === true) {
        this.countdown -= 1000
        const min = Math.floor(this.countdown / (60 * 1000))
        const sec = Math.floor((this.countdown - (min * 60 * 1000)) / 1000)

        // countdown gows below 0
        // stop the timer
        // send message to the main process
        if (this.countdown <= 0) {
          this.stopTimer()
          if(this.mode=='break'){
            this.dispatchEvent(new CustomEvent('closemodel'));
          }
          this.dispatchEvent(new CustomEvent('openmodel'))
          
        }else if (this.countdown==5000){
          this._renderMinuteSecond(min, sec)
          const event=new ShowToastEvent({
            title:'Break',
            message:'Be Prepare for the Break in 5 second',
            varient:'warning'
          });
          if(this.mode=='focus'){
            this.dispatchEvent(event);
          }
        } else {
          this._renderMinuteSecond(min, sec)
        }
      }
    }, 100)
  }

  @api startTimer () {
    // change the playing to true call the counter
    this.playing = true
    this.counter()
  }

  pauseTimer () {
    // pause the timer
    this.playing = false

    clearInterval(this.timerId)
  }

  @api stopTimer () {
    // stop the timer be clearing the timerid
    // setting mull to countdown
    this.countdown = null
    clearInterval(this.timerId)
    this.timerId = null
    this.playing = false
    console.log(this.focusTimeValue)
    this._renderMinuteSecond(this.focusTimeValue,0);
  }

  isPlaying () {
    return this.playing
  }

  @api _renderMinuteSecond (min, sec) {
    this.Minute = min
    this.Seconds= sec
  }
  getmode(){
    if(this.mode ==='focus'){
      this.modeBoolean= true
    }else if(this.mode==='break'){
    this.modeBoolean= false
    }
  }

}