import { LightningElement,api } from 'lwc';

export default class ModelWindow extends LightningElement {
     showModel=false
     @api mode
     @api breakTimerValue

    @api openmodel(){
        this.showModel=true;
        this.startTimer();
    }
    closemodel(){
        this.showModel=false;
        console.log(this.mode)
    }
    startTimer(){
        setTimeout(() => {
            this.template.querySelector('c-Timer').startTimer()
        }, 200);
        
    }
    //pass the value to the parent
    StartNextRound(){
        this.dispatchEvent(new CustomEvent('startnextround'));
    }

}