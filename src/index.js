// ./ in import means to look at the folder we are in and import from file
// components are treated as jsx tags

import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail />
            
        </div>
    );

};

ReactDOM.render(<App />, document.querySelector('#root'));