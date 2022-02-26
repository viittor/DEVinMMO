import React, { useEffect, useState } from "react";
import {
  DGamesCommentsBox,
  DGamesInput,
  DGamesText,
  DTitleH3,
} from "./GameComment.elements";

const GameComment = () => {

    // let commentList = []
    // let commentData = JSON.parse(localStorage.getItem(game))

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);


//   function createId() {
//     var time = new Date();
//     // variavel para criar id
//     var id =
//       time.getMilliseconds().toString() +
//       time.getSeconds().toString() +
//       time.getMinutes().toString() +
//       time.getHours().toString();
//     return id;
//   }

// const handleSubmit = (event) =>{
//     if (commentData != null) {
//         commentList = commentData;
//         commentList.unshift({
//             id: createId(),
//             name: event.name,
//             comment: event.comment
//         })
//     } else if (commentData == undefined) {
//         commentList.unshift({
//             id: createId(),
//             name: "one",
//             comment: "event.comment"
//         })
//     }
//     else {
//         commentList.unshift({
//             id: createId(),
//             name: event.name,
//             comment: event.comment
//         })
//     }
    
//     localStorage.setItem(game, JSON.stringify(commentList));
//     setComments(commentList)

// }

  const handleSubmit = async (event)=>{
      event.preventDefault();
      await fetch("http://localhost:3333/comments",{
          headers:{
            Accept: "application/json",
          "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({
              name: name,
              email: email,
              comment: comment
          }),
      });
  }

  useEffect(() => {
   ///   setComments(commentData)
      async function getComment(){
          const commentResult = await fetch("http://localhost:3333/comments");
          const commentData = await commentResult.json();
          setComments(commentData);
      }
      getComment();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <DGamesCommentsBox onSubmit={handleSubmit}>
        <DTitleH3>Coments</DTitleH3>
        <DGamesInput
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></DGamesInput>
        <DGamesInput
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></DGamesInput>
        <DGamesText
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></DGamesText>
        <button type="submit">Add</button>
      </DGamesCommentsBox>
      <div>
          {comments.map((comments) => (
        <ul>
            <li>
                <h4>{comments.name}</h4>
                <p>{comments.comment}</p>
            </li>
        </ul>
          ))}
      </div>
    </>
  );
};

export default GameComment;
