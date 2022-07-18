import React, { useState } from "react";
import Modal from "./Modal";

const LABEL_COPY = "Copy to the clipboard";
const LABEL_COPIED = "Done!";

function App() {
  const [mimimi, setMimimi] = useState("");
  const [clipboard, setClipboard] = useState(LABEL_COPY);

  const onClickHandle = () => {
    navigator.clipboard.writeText(mimimi);
    setClipboard(LABEL_COPIED);
  };

  const onChangeHandle = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const preMimimi = event.currentTarget.value;
    const mimimiValue = preMimimi
      .replace(/[aeiou]/g, "i")
      .replace(/[AEIOU]/g, "I")
      .replace(/[áéíóú]/g, "í")
      .replace(/[ÁÉÍÓÚ]/g, "Í");
    setMimimi(mimimiValue);
    if (clipboard == LABEL_COPIED) {
      setClipboard(LABEL_COPY);
    }
  };

  return (
    <>
      <form>
        <div className="grid">
          <label htmlFor="entry">
            The text you want to mimimify
            <textarea
              onChange={onChangeHandle}
              id="entry"
              defaultValue="Paste your text here"
            ></textarea>
          </label>
          <label htmlFor="output">
            Thiri yii gi:
            <textarea readOnly={true} id="output" value={mimimi}></textarea>
          </label>
          <button type="button" onClick={onClickHandle}>
            {clipboard}
          </button>
        </div>
      </form>
      <Modal id="cookies" header="Cookies?">
        <p>
          This site <strong>does not</strong> store or process any cookies.
        </p>
      </Modal>
      <Modal id="about" header="About this site">
        <p>
          This is a silly idea by{" "}
          <a href="https://links.jorgesanz.net">Jorge Sanz</a>&nbsp; to convert
          pedantic quotes into something more mundane.
        </p>
        <p>
          If you check the <a href="https://github.com/jsanz/mimimi">code</a>
          &nbsp; you'll see this is incredibily overengineered. This is because
          this is more a playground for a few web development components around
          the simplest use case.
        </p>
      </Modal>
    </>
  );
}

export default App;
