import { LightningElement,api } from 'lwc';

export default class Setting extends LightningElement {
    @api userSettings;



    handleSliderChange(e){
       let mode=e.target.dataset.mode;
       let value=e.target.value;
        
       let updatedSetting={...this.userSettings}
       updatedSetting[mode]= Number(value);
       console.log(updatedSetting)
       this.dispatchEvent(new CustomEvent('updatesettings',{detail:updatedSetting}))
    }
}