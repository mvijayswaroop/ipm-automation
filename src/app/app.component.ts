import { Component } from '@angular/core';
import { IonComponent } from 'src/component';
import { ComponentActions } from 'src/keywords/component-management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ComponentActions]
})
@IonComponent({
  id: "test-widget",
  displayName: "Test Widget",
  description: "Test Widget"
})
export class AppComponent {
  title = 'ipm-automation';

  constructor(private componentActions: ComponentActions) {
  }

  public startComponent() {
    this.componentActions.startComponent('TestComponent').then(() => { }
    ).catch(() => { })
  }

}
