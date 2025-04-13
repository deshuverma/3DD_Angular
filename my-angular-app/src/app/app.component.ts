import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  template: `<ejs-dropdownlist></ejs-dropdownlist>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
  pizza: string[]=['USA','UK','India', 'Pak'];


  public dataFields:Object={text:'Game', Value:'Id'};

  public localData:Object[]=[
{Id:'Game1', Game:'American football'},
{Id:'Game2', Game:'Cricket'}

  ];
}
