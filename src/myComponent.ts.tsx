//import * as React from 'react';
//import * as ReactDOM from 'react-dom';

'use strict';

interface IProps {

}
interface IState {

}
class MyComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return <div>Hello world!  This is react test. You successfully created a react component</div>;
  }
}

ReactDOM.render(
  <MyComponent />,
  document.getElementById('mycomponent') as HTMLElement
);