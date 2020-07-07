import React, { useEffect } from "react";

import { Container } from "./styles";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

function Message({ message, updateMessage }) {
  useEffect(() => {
    setTimeout(() => {
      updateMessage();
    }, 2000);
  });

  return (
    <Container
      className="animate__animated animate__fadeInRight"
      status={message.status}
    >
      {message.status === "success" ? (
        <FaCheckCircle />
      ) : (
        <FaExclamationTriangle />
      )}
      <p>{message.text}</p>
    </Container>
  );
}

export default Message;
