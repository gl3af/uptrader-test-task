import { useCallback, useState } from "react";

export const useModal = (): [boolean, () => void] => {
  const [active, setActive] = useState<boolean>(false);

  const toggleModal = useCallback(() => {
    setActive((prev) => !prev);
  }, []);

  return [active, toggleModal];
};
