import * as React from 'react';

'use strict';

export default class WelcomePanel extends React.Component<{}, {}> {  
  readonly state: {};  
  constructor(props: {}) {
    super(props);
    this.state = {};
  }
  
  render() {   
    return (
        <h1>
          Welcome!
        </h1>
    );
  }
}
