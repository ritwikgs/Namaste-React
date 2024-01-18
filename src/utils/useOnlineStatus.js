import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // state variable to track online status - by default online
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOnlineStatus(true);
    const handleOffline = () => setOnlineStatus(false);

    // add event listeners for online and offline events
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // cleanup the event listeners when the component unmounts
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // return current online status
  return onlineStatus;
};

export default useOnlineStatus;
