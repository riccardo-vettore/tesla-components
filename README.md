# [Tesla components](https://github.com/riccardo-vettore/tesla-components) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE) [![npm version](https://img.shields.io/npm/v/tesla-components)](https://www.npmjs.com/package/tesla-components)

**Tesla components is a set of Web Components aimed at recreating the Tesla Web App.**

- They have been created with <a href="https://lit.dev">Lit</a>
- Some components extend <a href="https://lion-web.netlify.app">Lion</a>
- Project has been created with <a href="https://vitejs.dev">Vite</a>

## How to install
To use tesla components within your project, you will first need to install it as a dependency.
```bash
npm i tesla-components
```

## How to use
### VanillaJS
```html
// Import your component
<script type="module">
  import 'tesla-components'
</script>

// Use the component
<tesla-button variant="dark">
    Lorem ipsum
</tesla-button>

<script>
    const button = document.querySelector('tesla-button');
    button.addEventListener('click', () => {
        console.log('clicked');
    })
</script>
```

### Angular
```js
// Import your component
// ...
import 'tesla-components'

@NgModule({
    declarations: [/* ... */],
    imports: [/* ... */],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```
```html
// Use the component
<tesla-button variant="dark"
              (click)="clickHandler()"
>
    Lorem ipsum
</tesla-button>
```
```js
clickHandler() {
    console.log('clicked');
}
```

### React
```html
// Use the component
<TeslaButtonReact
    variant="dark"
    onClick={() => (console.log('clicked'))}
></TeslaButtonReact>
```
