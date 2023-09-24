import { createPortal } from "react-dom";
import "./style.scss";

type ModalProps = {
  active: boolean;
  children: React.ReactNode;
  toggle: () => void;
};

export default function Modal({ active, children, toggle }: ModalProps) {
  return createPortal(
    <div className={`modal ${active ? "active" : ""}`} onClick={toggle}>
      <div
        className={`modal__container ${active ? "active" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
