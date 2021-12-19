import { useState, useEffect } from "react";

function getSessionStorageOrDefault(key, defaultValue, removeKey) {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
}

export default function useSessionStorage(key, defaultValue, removeKey) {
  useEffect(() => {
    removeKey && sessionStorage.removeItem(removeKey);
  }, [removeKey, key]);

  const [value, setValue] = useState(
    getSessionStorageOrDefault(key, defaultValue, removeKey)
  );

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
