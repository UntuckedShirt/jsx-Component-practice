// ./ in import means to look at the folder we are in and import from file
// components are treated as jsx tags
// communicate info from child component by taking theclosing tag of ApprovalCard
// and want it to show a common detail, cut it and put on other side of comment detail


import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
//The app is the parent component and the details within app are children or child componenets
//Props or (properties) pass data from parent to chilld. Works like DNA
//A child cannot pass data to the parent

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
            {/*parent component*/}     {/*refrencing a JS varaible use curlys*/}
                <CommentDetail
    {/*prop->*/}     author="Nate"
                    timeAgo="Today at 4:45pm"
                    posts="Hey there"
                    avatar={faker.image.avatar()} /> {/*<-prop value*/}  
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    author="Jate"
                    timeAgo="Ysterday at 5:25pm"
                    posts="Pleasure is all mine"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    author="Sate"
                    timeAgo="Yesterday at 3:25pm"
                    posts="Feeling stressed"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    author="Kate"
                    timeAgo="Today at at 7:56pm"
                    posts="Going camping tommorow"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    author="Plate"
                    timeAgo="Today at 9:33pm"
                    posts="Hey pilgrim"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );

};

ReactDOM.render(<App />, document.querySelector('#root'));