# Angular2-102

In this part you will learn more about building Component with Input Property (similar to WPF Dependency Property)

- [Jumpstart](https://github.com/dacho68/Angular2-Jumpstart) - Quick understanding of how to build an App with Angular 2
- [Part 1](https://github.com/dacho68/Angular2-101) - Property Binding, Class and Style Binding, Event Binding, Two way Binding
- Part 2 -  Component API in depth
- Part 3

## Setup the environment on Windows for running the samples
- First install the Node at nodejs.org
- Install typescript globally

```
npm install -g typescript
npm install -g typings
```

We are going VSCode as our IDE, and you can download it from  code.visualstudio.com. 
after you checkout this repository. Run the command below for install the dependencies

```
npm install
npm start
```

## Input Properties

   Angular automatically updates data-bound properties during change detection 
   
   **Syntax :**
   
``` typescript
    @Input('alias name') propertyName; // add the Input decorator (@Input()) in your class component.
```
Using the alias to expose the alias name as the public input name but keep the actual property name as a private property

However if you don't want to use the Input decorator, you can add the input property in the inputs metadata of the component as the code below. Personally I like to use the Input decorator

``` typescript
    @Component({
        // element selector my-app
        selector: 'favorite', 
        template: `
            <span class="glyphicon" 
            [class.glyphicon-star-empty]="!isFavorite"
            [class.glyphicon-star]="isFavorite"
            (click)="onClick($event)" ></span>
        `,
        // including 
    directives:[ ],
    inputs: ['isFavorite']  // we want to expose the isFavorite to public for binding
    })

    export class FavoriteComponent {
    isFavorite: boolean = false;   
    onClick($event){
        this.isFavorite = !this.isFavorite;
    }
  
```
 
See: [Input/Output Property Example](https://github.com/dacho68/Angular2-102/blob/master/app/favorite.component.ts)  

Bind to an Input Property on an component
``` typescript 
    @Component({
        selector: 'my-app',
        template: `<h1>Welcome to Angular 2 - 102</h1>
                My Favorite : <favorite [is-favorite]="post.isFavorite"></favorite>
                `,
    directives:[ FavoriteComponent ]
    })

    export class AppComponent {
    post = {
        title: "Title",
        isFavorite: true
    }
```
## Output Properties

When an output property emits an event, an event handler attached to that event the template is invoked.
  
   **Syntax :**
   
``` typescript
    @output('alias name') propertyName = new EventEmitter; 
```

The Output Property can also declare in the metadata of the component. And the alias name has the same purpose as the Input Property.

## Templates

The template url is useful when you have very large template then you want to keep your template in a separate file. 
The draw back is this will cost you one more http request on the first call. Personnally, I do my best to keep the template inline.  
   
   **Syntax :**
   
``` typescript
   templateUrl: 'path/your_template_file.html', 
```

Example :

``` typescript
@Component({
    selector: 'favorite', 
    // using templateURL will cost you one more HTTP request
    templateUrl: 'app/favorite.template.html', 
}) 
```

## Styles

it's similar to the template concept, there is inline styles[] and the stylesUrl[]

Example : Inline Style

``` typescript
@Component({
    selector: 'favorite', 
    templateUrl: 'app/favorite.template.html', 
    styles:[`
        .glyphicon-star{
            color: orange;
        }
    `],
}) 
```