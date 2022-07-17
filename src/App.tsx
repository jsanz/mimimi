import React, { useState } from "react";

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
  );
}

export default App;
