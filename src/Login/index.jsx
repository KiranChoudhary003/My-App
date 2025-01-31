import Wrapper from './style'
import React, { useEffect, useState } from "react";
import { requestNotificationPermission } from "../Helper/push";
import { onMessage } from "firebase/messaging";
import { messaging } from "../Helper/firebase";


const Login = () => {

    const [notification, setNotification] = useState({ title: "", body: "" });

  useEffect(() => {
    requestNotificationPermission();
    onMessage(messaging, (payload) => {
      console.log("Received foreground message:", payload);
      const { title, body } = payload.notification;

      // Update state
      setNotification({ title, body });

      // Check notification permission before displaying
      if (Notification.permission === "granted") {
        new Notification(title, {
          body: body || "Foreground Notification Body",
        });
      } else {
        console.log("Notification permission not granted");
      }
    });
  }, []);
  return (
    <Wrapper>
      <input type='button'
        placeholder='Login'
        value = "Login"
      />
      {notification.title && (
        <div>
          <h2>{notification.title}</h2>
          <p>{notification.body}</p>
        </div>
      )}
    </Wrapper>
  )
}

export default Login
