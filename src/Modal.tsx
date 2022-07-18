import { useEffect } from "react";
import { toggleModal } from "./modal";

type ModalProps = {
  id: string;
  header: string;
  children?: React.ReactNode;
};

function Modal({ id, header, children }: ModalProps) {
  const thisId = `modal-${id}`;
  useEffect(() => {
    Array.from(document.getElementsByTagName("a"))
      .filter((el) => {
        return (
          !el.classList.contains("close") &&
          el.getAttribute("data-target") === thisId
        );
      })
      .map((el) => el.addEventListener("click", toggleModal));
  });

  return (
    <dialog id={thisId}>
      <article>
        <header>
          <a
            href="#close"
            aria-label="Close"
            className="close"
            data-target={thisId}
            onClick={toggleModal}
          ></a>
          <h4>{header}</h4>
        </header>
        <>{children}</>
      </article>
    </dialog>
  );
}

export default Modal;
