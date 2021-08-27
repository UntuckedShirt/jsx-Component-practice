//

import React from 'react';


//CommentDetail is lookin at props objet.
//It sees author property
//takes it and sticks it into an anchor props.author
const CommentDetail = (props) => {
    console.log(props)
    return (
            /*(property) (value)*/
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.avatar} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                    {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date"> {props.timeAgo}</span>
                    </div>
                    <div className="text">{props.posts}</div>
                </div>
            </div>

    );

};

//allows availability to outside files

export default CommentDetail;