import { LightningElement, api } from 'lwc';
import {loadStyle} from 'lightning/platformResourceLoader';
import Css from '@salesforce/resourceUrl/MyAssets';

let FOCUS_KEY='FocusValue';
let BREAK_KEY='BreaksValue';
let ROUND_KEY='RoundsValue';
export default class AppMain extends LightningElement {

    DEFAULT_FOCUS=25;
    DEFAULT_BREAK=1;
    DEFAULT_ROUNDS=2;
    USER_SETTINGKEY='EagluetUserStorage';
    CURRENT_ROUND=1;

    @api USER_SETTINGS={};


    connectedCallback(){
        loadStyle(this.Css+'/variable.css');
        this.getLocalStorage();
    }
    getDefaultValue(){
       return  {
            [FOCUS_KEY]:this.DEFAULT_FOCUS,
            [BREAK_KEY]:this.DEFAULT_BREAK,
            [ROUND_KEY]:this.DEFAULT_ROUNDS
            }
    }
     get focusvalue(){
        let focusvalue=this.USER_SETTINGS[FOCUS_KEY];
        return focusvalue;
    }
    get breakvalue(){
        let breakvalue=this.USER_SETTINGS[BREAK_KEY];
        return breakvalue;
    }

    get NoofRounds(){
        let RoundValue=this.USER_SETTINGS[ROUND_KEY];
        return RoundValue;
    }

    getLocalStorage(){
        
        if(!sessionStorage.getItem(this.USER_SETTINGKEY)){

            let UserSettingJson= this.getDefaultValue();

            sessionStorage.setItem(this.USER_SETTINGKEY,JSON.stringify(UserSettingJson));
            this.USER_SETTINGS=JSON.parse(sessionStorage.getItem(this.USER_SETTINGKEY));
        }else{
            this.USER_SETTINGS=JSON.parse(sessionStorage.getItem(this.USER_SETTINGKEY));
        }
    }

    UpdateUserSettings(event){
        this.USER_SETTINGS=event.detail;
        this.SaveToDB();
        
        this.renderTimerClock();
    }

    SaveToDB(){
        sessionStorage.setItem(this.USER_SETTINGKEY,JSON.stringify(this.USER_SETTINGS));
    }
    ResetToDefault(){

        this.USER_SETTINGS=this.getDefaultValue();
        sessionStorage.setItem(this.USER_SETTINGKEY,JSON.stringify(this.USER_SETTINGS));
        this.renderTimerClock();
    }

    renderTimerClock(){
        let FocusVal=this.focusvalue;
        this.template.querySelector('c-timer')._renderMinuteSecond(FocusVal,0);
    }
    openModeWindow(){
        this.template.querySelector('c-model-window').openmodel();
    }
    StartNextRound(){
        if(this.CURRENT_ROUND< this.NoofRounds){
            this.template.querySelector('c-timer').startTimer();
            this.CURRENT_ROUND++
        }else{
            this.CURRENT_ROUND=1;
            return;
        }
    }
  
}
