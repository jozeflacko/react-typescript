import * as React from 'react';

'use strict';

export default class Signature extends React.Component<{}, {}> {  
  readonly state: {};  
  constructor(props: {}) {
    super(props);
    this.state = {};
  }
  
  render() {   
    const style = {
        color: 'red',
    };

    return (
        <span style={style}>
          Jozef Lacko
        </span>
    );
  }
}
