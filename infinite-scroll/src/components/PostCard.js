import React from "react";

const PostCard = ({ id, title, body }) => {
  return (
    <div className="border rounded-md p-4 w-1/4 capitalize shadow-md">
      <div className="font-semibold text-2xl text-orange-400 w-8 h-8 rounded-full border text-center shadow-inner">
        {id}
      </div>
      <h2 className="font-medium  my-4">{title}</h2>
      <p className="text-gray-400 font-thin text-sm ">{body}</p>
    </div>
  );
};

export default PostCard;
