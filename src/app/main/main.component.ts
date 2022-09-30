import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core'
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('sidebar') sidebar!: SidebarComponent
  @ViewChild('togglebtn')
  public showBackdrop: boolean = false
  public isOpen: boolean = false
  public closeOnDocumentClick: boolean = true
  // public mediaQuery: object = window.matchMedia('(max-width: 200px)');

  constructor () {}

  ngOnInit (): void {}


  toggleClick (): void {
    this.sidebar.toggle()
  }
}
