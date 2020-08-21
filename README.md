# Angular Donut

A simple donut in [angular](https://angular.io/).

## Getting Started
To use ang-donut in your project install it via [npm](https://www.npmjs.com/package/ang-donut):

>Install ang-donut

`npm i ang-donut`

>In *app.module.ts*

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { DonutModule } from 'ang-donut';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DonutModule,
    CommonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

>In *app.component.html*

```html
<ng-donut 
[donutData]='donutData' 
[innerLabel]='innerLabel' 
[showTotal]='showTotal' 
[dim]='dim' 
[showLegend]='legend'>
</ng-donut>
```

>In *app.component.ts*

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  innerLabel = 'Colors';
  legend = true;
  dim = [500, 500];
  showTotal = true;
  donutData = [
    { name: 'Red', value: '30', color: '#E25325' },
    { name: 'Blue', value: '20', color: '#6064CF' },
    { name: 'Black', value: '40', color: '#5A5C59' },
    { name: 'Green', value: '10', color: '#50FD1D' }
  ];
}

```
## Properties

| Name | Description |Type
| ------ | ------ |--------|
| donutData | specifies the data to be send to donut |Array of objects having properties `name` , `value` and `color`(hexcode) as strings.
| innerLabel | label to be shown inside the donut | `string` 
| showTotal | should total be shown inside the donut | `boolean`
| dim | dimensions of the donut | Array of two numbers where first value represents *height* and second value represents *width*
| showLegend |should legend be shown inside donut | `boolean`

## License
MIT