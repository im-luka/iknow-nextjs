import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      const storageJson = localStorage.getItem(key);

      if (storageJson) {
        return JSON.parse(storageJson);
      }
    }

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
