# leancloud-js-test
leancloud resistance test

# Simple Setup

Use broswer to compile code at running time.
Add following React and babel script to .html file and don't use import in jsx.

```  
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.6/react.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.6/react-dom.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.js"></script>
```

```
<script src='main.jsx' type="text/babel">  </script>
```


# Complete Setup

Install React.

```
npm install --save react react-dom
```

Install babel.

```
npm install --save-dev babel-preset-env babel-preset-react babelify
```

Create a '.babelrc' file.
```
{
  "presets": ["env", "react"]
}
```

Install browserify and watchify.
```
npm install browserify watchify --save
```

Add following scripts to 'scripts' in 'package.json'
```
"build": "browserify public/main.jsx -t babelify --o public/bundle.js",
"watch": "watchify public/main.jsx -t babelify --o public/bundle.js"
```

Include 'bundle.js' in .html body
```
<script src='bundle.js'>  </script>
```

Single build
```
npm run build
```

Watch mode
```
npm run watch
```