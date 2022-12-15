import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  NgModule,
} from "@angular/core";

import { Directive } from "@angular/core";

@Directive({ selector: "h1[red]", standalone: true })
export class MakeItRedDirective implements AfterViewInit {
  #elem = inject(ElementRef);

  ngAfterViewInit() {
    const elem = this.#elem.nativeElement as HTMLElement;
    elem.style.color = "red";
  }
}

@Directive({ selector: "h1[blue]", standalone: true })
export class MakeItBlueDirective implements AfterViewInit {
  #elem = inject(ElementRef);

  ngAfterViewInit() {
    const elem = this.#elem.nativeElement as HTMLElement;
    elem.style.color = "blue";
  }
}
export const dirs = [MakeItBlueDirective, MakeItRedDirective] as const;

@NgModule({
  imports: [MakeItBlueDirective, MakeItRedDirective],
  exports: [MakeItBlueDirective, MakeItRedDirective],
})
export class DirsModule {}

@Component({
  selector: "app-root",
  standalone: true,
  //this does work
  // imports: [MakeItRedDirective, MakeItBlueDirective],

  // this does not work
  imports: [dirs],

  //this does also work
  // imports: [DirsModule],

  template: `
    <div>
      <h1 red>hello, I'm red</h1>
      <h1 blue>hello, I'm blue</h1>
    </div>
  `,
  styles: [],
})
export class AppComponent {}
