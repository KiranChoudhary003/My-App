import { getToken } from "firebase/messaging";
import { VAPID_KEY, messaging } from "./firebase";

export const requestNotificationPermission = async () => {
  if (!("Notification" in window)) {
    console.error("Notifications are not supported in this browser.");
    return;
  }

  try {
    const permission = await Notification.requestPermission();

    if (permission !== "granted") {
      console.warn("Notification permission denied.");
      return;
    }

    console.log("Notification permission granted.");

    const token = await getToken(messaging, { vapidKey: VAPID_KEY });

    if (!token) {
      console.error("Failed to retrieve FCM token.");
      return;
    }

    console.log("FCM Token:", token);

    const response = await fetch("https://mayoor-backend.vercel.app/api/save-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    const data = await response.json();
    console.log("Server Response:", data);
  } catch (error) {
    console.error("Error fetching FCM token:", error);
  }
};
