import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-directives',
  templateUrl: './three-directives.component.html',
  styleUrls: ['./three-directives.component.css']
})
export class ThreeDirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //*ngIf -- start
  isCheck: boolean = true;
  name: string = "Tim";
  result: string;

  getName(): string {
    return this.name;
  }

  isNullOrEmptyByInput(input: string): boolean {
    this.result = input;
    return !!input || input === "";
  }
  //*ngIf -- end

  getDemoList(): Array<number> {
    return [1, 2, 3, 4, 5, 6];
  }

  showColor(input: string) {
    return input;
  }
}
