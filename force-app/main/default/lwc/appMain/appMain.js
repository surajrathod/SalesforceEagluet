import { LightningElement, api } from 'lwc';
import {loadStyle} from 'lightning/platformResourceLoader';
import Css from '@salesforce/resourceUrl/MyAssets';

export default class AppMain extends LightningElement {

    DEFAULT_FOCUS=25;
    DEFAULT_BREAK=1;
    DEFAULT_ROUNDS=2;
    USER_SETTINGKEY='UserStorage';
    @api USER_SETTINGS={}


    connectedCallback(){
        loadStyle(this,Css+'/variable.css');
        this.getLocalStorage();
    }

    getLocalStorage(){
        
        if(!localStorage.getItem(this.USER_SETTINGKEY)){
            let UserSettingJson={
                                FocusValue:this.DEFAULT_FOCUS,
                                BreaksValue:this.DEFAULT_BREAK,
                                RoundsValue:this.DEFAULT_ROUNDS
                                }
            localStorage.setItem(this.USER_SETTINGKEY,JSON.stringify(UserSettingJson));
        }else{
            this.USER_SETTINGS=JSON.parse(localStorage.getItem(this.USER_SETTINGKEY));
        }
    }

    UpdateUserSettings(event){
        this.USER_SETTINGS=event.detail;
    }
}