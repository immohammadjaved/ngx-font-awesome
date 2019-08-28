
# Ngx Font Awesome
Simple, easy to use [Angular](https://angular.io) component to manage Font Awesome icons.

# How to install

**Install Packages**
`npm install ngx-font-awesome font-awesome --save`

**Import the module:**
```typescript
//...
import { NgxFontAwesomeModule } from 'ngx-font-awesome';
@NgModule({
  //...
  imports: [
    //...
    NgxFontAwesomeModule
  ],
  //...
})
export class AppModule { }
```

**If you're using [Angular CLI](https://github.com/angular/angular-cli) 6.0.0, add the font-awesome CSS to `styles` inside the `angular.json`**
```json
"styles": [
    "styles.css",
    "./node_modules/font-awesome/css/font-awesome.css"
],
```


**If you're using [Angular CLI](https://github.com/angular/angular-cli), add the font-awesome CSS to `styles` inside the `angular-cli.json`**
```json
"styles": [
    "styles.css",
    "../node_modules/font-awesome/css/font-awesome.css"
],
```


*NOTE: If using SCSS preprocessor just change the `css` for `scss`*


**If you're not using the CLI, import the stylesheet to your `index.html` file**
```html
<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
```

# Usage and options
*NOTE: Pass boolean values with square brackets `[]`

Name           | Type               | Options                                   | Optional
---            | ---                | ---                                       | ---
name           | `String`           | [F-A Icons](http://fontawesome.io/icons/) | No
size           | `String`           | `lg, 2x, 3x, 4x, 5x`                      | Yes
animation      | `Boolean`          | `true, false`                             | Yes
rotate         | `Number`           | `90, 180, 270`                            | Yes
flip           | `String`           | `vertical, horizontal`                    | Yes
fixed          | `Boolean`          | `true, false`                             | Yes
border         | `Boolean`          | `true, false`                             | Yes
customClass    | `String`           | `eg: custom`                              | Yes

*Example Use*
```html
<ngx-fa name="cog" [animation]="true" size="lg"></ngx-fa>
```