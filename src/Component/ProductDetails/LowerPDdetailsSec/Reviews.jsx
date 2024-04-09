import React, { useState, useEffect } from 'react';
import './LowerPDdetailsSec.css'


const Reviews = ({ foundData }) => {
    const [data, setData] = useState(foundData);
    const [comment, setComment] = useState('');
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("register");
        if (storedUser) {
            const { username } = JSON.parse(storedUser);
            setLoggedInUser(username);
        }
    }, []);

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmitComment = () => {
        if (!loggedInUser) {
            alert("Please log in to leave a comment!");
            return;
        }

        if (!comment.trim()) {
            alert("Comment cannot be empty!");
            return;
        }

        const newData = { ...data };
        newData.comment.push({ user: loggedInUser, text: comment });
        setData(newData);
        setComment('');
    };

    return (

  <div className="comment-head">
          <div className="comment-container">
            {data.comment && data.comment.map((comment, i) => (
                <div className="comment" key={i}>
                    <p>
                        <span className="user">#{comment.user}:</span>
                        <span className="text"> {comment.text}</span>
                    </p>
                </div>
            ))}
        </div>
        <div className="comment-input">
              <input
                type="text"
                value={comment}
                onChange={handleCommentChange}
                placeholder="Add a comment"
            />
            <button onClick={handleSubmitComment}>Submit</button>
        </div>
  </div>


    );
};

export default Reviews;
