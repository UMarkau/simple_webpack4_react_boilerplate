## Contains folders that are named according to existing routes.

```
pages/
..someRoute/
```

### Each folder contains a page component, the name of which coincides with the name of the route, as well as the styles required for this component:

```
pages/
..someRoute/
....someRoute.js
....someRoute.module.scss
```

### If there are components that are used and created exclusively for the needs of a particular route they are placed in the components folder in the route directory:

```
pages/
.. someRoute/
.... someRoute.js
.... someRoute.module.scss
.... components/
...... UniqComponent/
........ UniqComponent.js
........ UniqComponent.module.scss
```

> Pay attention to the naming of components-routes (camelCase).
