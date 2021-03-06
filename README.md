# Angular2-102

In this part you will learn more about building Components with the Input/Output properties; also the templates and the styles. Most of the samples are from the course [Angular 2 with TypeScript](https://www.udemy.com/angular-2-tutorial-for-beginners/learn/v4/overview) by Mosh Hamedi on Udemy.
I'm developping the Angular 2 samples along way I'm learning Angular 2. If you have time, I recommend you to take the course because it has richer contents.
- [Jumpstart](https://github.com/dacho68/Angular2-Jumpstart) - Quick understanding of how to build an App with Angular 2.
- [101](https://github.com/dacho68/Angular2-101) - Property Binding, Class and Style Binding, Event Binding, Two way Binding.
- 102 - Component API in depth.
- [103](https://github.com/dacho68/Angular2-103) - Controlling Rendering of the HTML.
- [104](https://github.com/dacho68/Angular2-104) - Forms and Validations.
- [Connectivity](https://github.com/dacho68/Angular2-Connectivity) - Connecting to the server.

## Setup the environment on Windows for running the samples
- First install [NodeJs](https://nodejs.org/en/)
- Install typescript globally

```
npm install -g typescript
npm install -g typings
```

We are going to use [Visual Studio Code](http://code.visualstudio.com/) for editing our project
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

Using the alias to expose the alias name as the public input name but keep the actual property name as a private property.
However if you don't want to use the Input decorator, you can add the input property in the inputs metadata of the component as the code below. Personally I like to use the Input decorator

**Example :** Using metadata
``` typescript
    @Component({
        selector: 'favorite', 
        template: `
            <span class="glyphicon" 
            [class.glyphicon-star-empty]="!isFavorite"
            [class.glyphicon-star]="isFavorite"
            (click)="onClick($event)" ></span>
        `,
    directives:[ ],
    inputs: ['isFavorite']  // we want to expose the isFavorite to public for binding
    })

    export class FavoriteComponent {
    isFavorite: boolean = false;   
    onClick($event){
        this.isFavorite = !this.isFavorite;
    }
``` 

**Example :** Bind to the input property
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
See: [Input/Output Property Example](https://github.com/dacho68/Angular2-102/blob/master/app/favorite.component.ts) 

## Output Properties

When an output property emits an event, an event handler attached to that event the template is invoked.
  
**Syntax :**
   
``` typescript
    @output('alias name') propertyName = new EventEmitter; 
```

The Output Property can also declare in the metadata of the component. And the alias name has the same purpose as the Input Property.

## Templates

The template url is useful when you have a very large template then you want to keep your template in a separate file. 
The draw back is this will cost you one more http request on the first call. Personnally, I do my best to keep the template inline.  
   
**Syntax :**
   
``` typescript
   template:'...' //or
   templateUrl: 'path/your_template_file.html', 
```

**Example :** Using templateUrl

``` typescript
@Component({
    selector: 'favorite', 
    templateUrl: 'app/favorite.template.html' 
}) 
```

## Styles

it's similar to the template concept, there is inline styles[] and the stylesUrl[]

**Syntax :**
   
``` typescript
   styles:[`...`] //or
   stylesUrl: ['path/your_css_file.css','...'] 
```

**Example :** Inline Style 

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
## Exercise 1 - Like Component
Make a glyphicon heart when you click on it, the counter increases by one and the color changes to pink ![like](./images/like.jpg) . If you click it again . it goes back to gray and decreases by one ![unlike](./images/unlike.jpg).  
the mouse hover also changes the mouse cursor to pointer.

use the glyphicon from bootstrap to render the icon

_Hint :_
``` html5   
    glyphicon-heart
    light gray : #ccc
    pink: deeppink
    cursor: pointer
```
See: [Solution](https://github.com/dacho68/Angular2-102/blob/master/app/like2.component.ts)

## Exercise 2 - Voter Component
Make a voter component as you see on the stack overflow website. The user can only have one vote up and one vote down. This image ![vote down](./images/vote_down.jpg) illustrates the look and feel of the voter component.
_Hints :_
``` html5   
    glyphicon-menu-up
    glyphicon-menu-down
    width: 20px
    
    Public API
      Input Properties : voteCount and myVote
      Output Properties : vote
```  
See: [Solution](https://github.com/dacho68/Angular2-102/blob/master/app/voter.component.ts)

## Challenge - build a simple UI like tweeter

![twitter](./images/challenge_twitter.jpg)

_Hints :_
``` html5   
    Use the Media object from bootstrap for rendering the images.
```  
See: [Solution](https://github.com/dacho68/Angular2-102/tree/master/app/challenge)


**Useful References**
    - [Angular 2 Style Guide](https://github.com/dacho68/angular2-style-guide)
    - [CSS Encapsulation with Angular 2 Components](https://coryrylan.com/blog/css-encapsulation-with-angular-2-components)
    - [Core Concepts of Angular 2](http://victorsavkin.com/post/118372404541/the-core-concepts-of-angular-2)

## Output

![Result](./images/result.jpg)