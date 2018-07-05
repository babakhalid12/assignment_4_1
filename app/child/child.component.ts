import { Component, OnInit, Input, EventEmitter , Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class childComponent implements OnInit 
{
  // Add input decorator as it will receve the data from parent
  @Input() public parentData;
  @Output() public MyEvent = new EventEmitter();
  public SendEvent()
  {
    // Send the event to parent
    this.MyEvent.emit('Hello Parent...');
  }
  constructor() { }

  ngOnInit() {
  }

}
