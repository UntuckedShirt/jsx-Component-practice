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
    {/*parent component*/}   {/*prop}*/}          {/*prop value*/}                {/*refrencing a JS varaible use curlys*/}
            <CommentDetail author="Nate" timeAgo="Today at 4:45pm" posts="Hey there" avatar={faker.image.avatar()}/>
            <CommentDetail author="Jate" timeAgo="Ysterday at 5:25pm" posts="Pleasure is all mine" avatar={faker.image.avatar()}/>
            <CommentDetail author="Sate" timeAgo="Yesterday at 3:25pm" posts="Feeling stressed" avatar={faker.image.avatar()}/>
            <CommentDetail author="Kate" timeAgo="Today at at 7:56pm" posts="Going camping tommorow" avatar={faker.image.avatar()}/>
            <CommentDetail author="Plate" timeAgo="Today at 9:33pm" posts="Hey pilgrim" avatar={faker.image.avatar()}/>
            
        </div>
    );

};

ReactDOM.render(<App />, document.querySelector('#root'));