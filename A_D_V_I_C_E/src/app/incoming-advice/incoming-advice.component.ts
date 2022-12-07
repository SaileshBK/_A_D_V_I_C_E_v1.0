import { Component } from '@angular/core';
import { Advice } from '../advice';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-incoming-advice',
  templateUrl: './incoming-advice.component.html',
  styleUrls: ['./incoming-advice.component.scss']
})
export class IncomingAdviceComponent {


 incomingAdvice : string;
 data : Advice;

  constructor(private api:ApiService) { }

  ngOnInt() {
    this.getData();

  }

  getData(){
    this.api.get().subscribe((response : Advice) => {
      this.data = response;
      this.incomingAdvice = this.data.slip.advice;

    },
    (error) => {
      alert(JSON.stringify(error));
    });

  }

}
