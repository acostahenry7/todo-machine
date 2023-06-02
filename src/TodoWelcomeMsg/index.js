import React from "react";

function TodoWelcomeMsg() {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          height: 300,
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        ¡Crea tu primer todo!
      </h1>
    </div>
  );
}

export { TodoWelcomeMsg };
