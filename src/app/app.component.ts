import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { BottomTableDataComponent } from './bottom-table-data/bottom-table-data.component';
import { TopAreaComponent } from './top-area/top-area.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideNavigationComponent, BottomTableDataComponent, TopAreaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard_task';
}
