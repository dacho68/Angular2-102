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
        @Input() propertyName; // add the Input decorator in your class component.
```
However if you dont want to use the Input decorator, you can add the inputs metadata in the the 
 
See: [Property Binding Example](https://github.com/dacho68/Angular2-101/blob/master/app/propertyBindingTutorial.component.ts)  
``` html5
   
```
