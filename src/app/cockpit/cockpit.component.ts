import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() {}

  ngOnInit() {}

  onAddServer(nameInput: HTMLInputElement) {
    // this.onServerAdded.emit({name: nameInput.value, content: this.newServerContent})
    this.serverCreated.emit({
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    // this.bluePrintCreated.emit({name: nameInput.value, content: this.newServerContent})
    this.bluePrintCreated.emit({
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value,
    });
    console.log(this.serverContentInput);
  }
}
