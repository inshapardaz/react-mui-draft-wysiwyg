# urdu-editor

> React component that allows to use a rich editor based on Material UI and Draft-js


[![Node.js Package](https://github.com/inshapardaz/urdu-editor/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/inshapardaz/urdu-editor/actions/workflows/npm-publish.yml)


[Extension to work by Kelsier90](https://raw.githubusercontent.com/Kelsier90/urdu-editor/master/example/public/hi.gif)


## Install
if you don't have Material UI installed yet:

https://material-ui.com/getting-started/installation/

Then install the editor:

With npm:
```bash
npm install --save @material-ui/icons draft-js urdu-editor
```
Or with yarn:
```bash
yarn add @material-ui/icons draft-js urdu-editor
```

## Usage

```jsx
import React from 'react'
import MUIEditor, { MUIEditorState } from 'urdu-editor'

function Example() {
  const [editorState, setEditorState] = React.useState(MUIEditorState.createEmpty());

  const onChange = (newState) => {
    setEditorState(newState);
  };

  <MUIEditor editorState={editorState} onChange={onChange} />
}
```

# Local Developing

- install packages using  `yarn install` and start it using `yarn start`

- run the example project by using `yarn install` first to install packages and `yarn start` to start the example project in browser

## Full documentation here:

https://kelsier90.github.io/react-mui-draft-wysiwyg/

## License

MIT © [Kelsier90](https://github.com/Kelsier90)
