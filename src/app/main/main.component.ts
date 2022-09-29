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
  public width: string = '290px'
  public showBackdrop: boolean = false
  public isClosed: boolean = false
  parentMsg: string = ''
  constructor () {}

  ngOnInit (): void {}

  public onCreated (args: any) {
    this.sidebar.element.style.visibility = ''
  }
  openClick (): void {
    this.sidebar.toggle()
  }

  toggleClick (): void {
    if (this.isClosed) {
      this.isClosed = false
      this.sidebar.show()
    } else {
      this.isClosed = true
      this.sidebar.hide()
    }
  }
}
