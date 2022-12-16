import { Component } from '@angular/core';
import { DemoService } from './demo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeWebApp';
  constructor(private sharedService : DemoService){
    // this.sharedService.getData().subscribe((data) => {
    //     console.log(data);
    //});
  }
}
