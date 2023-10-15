import "@/styles/globals.css";
import { createContext, useState } from "react";

export const ContextData = createContext();

export default function App({ Component, pageProps }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <ContextData.Provider
      value={{
        name,
        email,
        message,
        setName,
        setEmail,
        setMessage,
      }}
    >
      <Component {...pageProps} />
    </ContextData.Provider>
  );
}
