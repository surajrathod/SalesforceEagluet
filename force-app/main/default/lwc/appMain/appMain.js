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
    USER_SETTINGKEY='UserStorage';

    @api USER_SETTINGS={};


    connectedCallback(){
        loadStyle(this,Css+'/variable.css');
        this.getLocalStorage();
    }
    getDefaultValue(){
       return  {
            [FOCUS_KEY]:this.DEFAULT_FOCUS,
            [BREAK_KEY]:this.DEFAULT_BREAK,
            [ROUND_KEY]:this.DEFAULT_ROUNDS
            }
    }
    @api get focusvalue(){
        let focusvalue=this.USER_SETTINGS[FOCUS_KEY];
        return focusvalue;
    }

    getLocalStorage(){
        
        if(!localStorage.getItem(this.USER_SETTINGKEY)){

            let UserSettingJson= this.getDefaultValue();

            localStorage.setItem(this.USER_SETTINGKEY,JSON.stringify(UserSettingJson));
            this.USER_SETTINGS=JSON.parse(localStorage.getItem(this.USER_SETTINGKEY));
        }else{
            this.USER_SETTINGS=JSON.parse(localStorage.getItem(this.USER_SETTINGKEY));
        }
    }

    UpdateUserSettings(event){
        this.USER_SETTINGS=event.detail;
        this.SaveToDB();
        this.template.querySelector("c-timer").stopTimer();
    }

    SaveToDB(){
        localStorage.setItem(this.USER_SETTINGKEY,JSON.stringify(this.USER_SETTINGS));
    }
    ResetToDefault(){

        this.USER_SETTINGS=this.getDefaultValue();
        localStorage.setItem(this.USER_SETTINGKEY,JSON.stringify(this.USER_SETTINGS));
    }
}