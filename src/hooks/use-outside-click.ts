import { MutableRefObject, useEffect } from "react";

export function useOutsideClick(
  ref: MutableRefObject<HTMLElement>,
  onOutsideClick: () => void
) {
  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref, onOutsideClick]);
}
