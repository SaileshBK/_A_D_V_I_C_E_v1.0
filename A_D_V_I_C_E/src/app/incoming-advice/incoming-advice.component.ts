import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-incoming-advice',
  templateUrl: './incoming-advice.component.html',
  styleUrls: ['./incoming-advice.component.scss']
})
export class IncomingAdviceComponent {


 incomingAdvice : string | undefined;

  constructor(private api:ApiService) { }

  ngOnInt() {
    this.getData();

  }

  getData(){
    this.api.getAdvices().subscribe((response : any) => {

      this.incomingAdvice = response.slip.advice;

    },
    (error) => {
      alert(JSON.stringify(error));
    });

  }

}
