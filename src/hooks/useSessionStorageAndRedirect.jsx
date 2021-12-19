import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useSessionStorageAndRedirect(key, route) {
  const navigate = useNavigate();
  const [value, setValue] = useState(getSessionStorageOrDefault(key));
  function getSessionStorageOrDefault(key) {
    const stored = sessionStorage.getItem(key);
    if (!stored) {
      return null;
    }
    return key;
  }
  console.log(key, value);
  useEffect(() => {
    key === value && navigate(route);
  }, [key]);
}
