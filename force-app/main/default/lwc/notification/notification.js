import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default function NotificationBreak() {
    return  new ShowToastEvent({
        title:'Break',
        message:'Be Prepare for the Break in 5 second',
        varient:'warning'
      });
}