import { Component } from '@angular/core';
// RxJS v6+
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-rxjs-app';

}
//emit ({name: 'Mike', age: 31}, {name: 'Mark', age:25})
const source = from([  { name: 'Mike', age: 31 },  { name: 'Mark', age: 25 } , { name: 'Devon', age: 36 }]);
//filter out people with age under 30
const example = source.pipe(filter(person => person.age <= 30));//output: "Under 30: Mike"
const subscribe = example.subscribe(val => console.log(`Under 30: ${val.name}`));
//

