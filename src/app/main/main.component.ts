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
  public width: string = '280px'
  public showBackdrop: boolean = false
  public isOpen: boolean = false
  public closeOnDocumentClick: boolean = true
  public mediaQuery: object = window.matchMedia('(max-width: 400px)');

  constructor () {}

  ngOnInit (): void {}

  public onCreated (args: any) {
    this.sidebar.element.style.visibility = ''
  }

  toggleClick (): void {
    this.sidebar.toggle()
  }
}
