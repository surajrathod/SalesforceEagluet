import { LightningElement,api } from 'lwc';

export default class ModelWindow extends LightningElement {
     showModel=true
     @api mode
     @api breakTimerValue

    @api openmodel(){
        this.showModel=true;
    }
    closemodel(){
        this.showModel=false;
        console.log(this.mode)
    }

}