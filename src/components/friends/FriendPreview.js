import React, { useContext } from "react";
import { FriendContext } from "./FriendProvider";
import logo from "./worm.jpg";

export default ({ newFriend, history }) => {

  
  
  const { addFriend } = useContext(FriendContext);
 
  return (
    <section className="addFriend">
      <h3 className="addFriend__name">{newFriend.email}</h3>
      <div className="friend__image">
        <img src={logo} />
      </div>
      <button
        onClick={() => {
          addFriend({
            activeUserId: parseInt(localStorage.getItem("nutshell_user"), 10),
            userId: parseInt(newFriend.id)
          }).then(() => {
            history.push("/");
          });
        }}
      >
        Add Friend
      </button>
    </section>
  );
};
