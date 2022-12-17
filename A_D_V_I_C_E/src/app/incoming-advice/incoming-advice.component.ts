import { Component } from '@angular/core';
import { Advice } from '../advice';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-incoming-advice',
  templateUrl: './incoming-advice.component.html',
  styleUrls: ['./incoming-advice.component.scss'],
})
export class IncomingAdviceComponent {
 incomingAdvice : string;
 data : Advice;
 hideButton = false;
 savedIncomingAdvice : string[] = [];

  constructor(private api:ApiService) { }

  getData(){
    this.hideButton = true;
    this.api.get().subscribe((response : Advice) => {
      this.data = response;
      this.incomingAdvice = this.data.slip.advice;
      setTimeout(() => {
        this.hideButton = false;
      }, 1500);
    },
    (error) => {
      alert(JSON.stringify(error));
    });

  }

  saveData() {
    this.savedIncomingAdvice.push(this.incomingAdvice);
  }

}
