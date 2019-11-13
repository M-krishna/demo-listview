# List-View

Easily create a list of data using `ListView`

## Installation and usage

The easiest way to use ListView is to install it from npm and build it into your app with Webpack.

```
yarn add demo-listview
```

Then use it in your app.

```
import React, { Component } from 'react';
import ListView from './components/list-view';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {message: 'Hello, How are you?'},
        {message: 'Hai Hey there'},
        {message: 'How are you??'},
        {message: 'Wait!'},
        {message: 'Bye'},
      ]
    }
  }
  render() {
    let {data} = this.state;
    return (
      <div className="App">
        <ListView listData={data}/>
      </div>
    );
  }
}
```

# Props

There is only one prop for now. We will add more features in the future.

* listData - accepts an array of Objects, in which the key of the object              must be message.

# License

MIT Licensed. Copyright (c) Krishna 2018.