import { Component } from '@angular/core';
import { FormInclusaoComponent } from "./components/form-inclusao/form-inclusao.component";
import { PolciaisListComponent } from "./components/polciais-list/polciais-list.component";

@Component({
  selector: 'app-root',
  imports: [FormInclusaoComponent, PolciaisListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
}
