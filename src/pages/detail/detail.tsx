import * as React from 'react';
import * as ReactDOM from 'react-dom';
import LikeButton from '../../components/likeButton/likeButton';
import Signature from '../../components/signature/signature';

'use strict';

export default class Detail extends React.Component<{}, {}> {  
  readonly state: {};  
  constructor(props: {}) {
    super(props);
    this.state = {};
  }
  
  render() {   
    return (
        <div>
            <div>
                <span>This is a detail page of </span>
                <Signature/>
            </div>  
            <div>
                <LikeButton/>how are you
            </div>           
        </div>
    );
  }
}
ReactDOM.render(
  <Detail />,
  document.getElementById('detail') as HTMLElement
);
