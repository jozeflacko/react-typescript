import * as React from 'react';
import * as ReactDOM from 'react-dom';

'use strict';

export default class LikeButton extends React.Component<{}, {}> {  
  readonly state: {};  
  constructor(props: {}) {
    super(props);
    this.state = {};
  }
  
  render() {   
    return (
        <button>
          I am like button
        </button>
    );
  }
}
