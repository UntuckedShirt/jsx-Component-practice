// ./ in import means to look at the folder we are in and import from file
// components are treated as jsx tags

import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
//The app is the parent component and the details within app are children or child componenets
//Props or (properties) pass data from parent to chilld. Works like DNA
//A child cannot pass data to the parent

const App = () => {
    return (
        <div className="ui container comments">
     {/*parent component*/}{/*prop}*/}
            <CommentDetail author="Nate" />
            <CommentDetail author="Jate"/>
            <CommentDetail author="Sate"/>
            <CommentDetail author="Kate"/>
            <CommentDetail author="Plate"/>
            
        </div>
    );

};

ReactDOM.render(<App />, document.querySelector('#root'));