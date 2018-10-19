import * as React from 'react';
import * as ReactDOM from 'react-dom';
import WelcomePanel from '../../components/welcomePanel/welcomePanel';
import LikeButton from '../../components/likeButton/likeButton';

'use strict';

export default class Main extends React.Component<{}, {}> {  
  readonly state: {};  
  constructor(props: {}) {
    super(props);
    this.state = {};
  }
  
  render() {   
    return (
        <div>
            <WelcomePanel/>
            <div>I am main page</div>  
            <div>
                <LikeButton/>
            </div>             
        </div>
        
    );
  }
}
ReactDOM.render(
  <Main />,
  document.getElementById('main') as HTMLElement
);
