import React from "react";

const ChatBox = ({message,currentUser}) => {
  const isOwn = message.username === currentUser;
  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-1`}>
      <div className={`max-w-[75%] p-2 rounded-lg ${isOwn ? 'bg-green-200' : 'bg-white'} shadow-md`}>        
        <div className="text-xs text-gray-500 mb-1">
          {isOwn ? 'You' : message.username} - {message.time}
        </div>
        <div className="text-sm text-gray-900 break-words">{message.text}</div>
      </div>
    </div>
  );
};

export default ChatBox;
