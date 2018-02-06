import React from "react";
import Follower from "./Follower";

function FollowersList(){
  return (
    <div>
      <h4>Followers</h4>
      <Follower
        name="Lorem"/>
      <Follower
        name="Ipsum"/>
    </div>

  );
}

export default FollowersList;
