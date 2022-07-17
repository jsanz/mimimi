import React, { useState } from "react";

function App() {
  const [mimimi,setMimimi] = useState("");

  const onClickHandle = () => {
    navigator.clipboard.writeText(mimimi);
    console.log(`${mimimi} escrito en el portapapeles`);
  }

  const onChangeHandle = (event: React.FormEvent<HTMLTextAreaElement> ) => {
    const preMimimi = event.currentTarget.value;
    const mimimiValue = preMimimi
    .replace(/[aeiou]/g,'i')
    .replace(/[áéíóú]/g,'í');
    setMimimi(mimimiValue);
  }

  return (
    <main className="container">
      <header>
        <h1>mimimi</h1>
      </header>
      <main>
        <p>Use this form to replace all vowels in your text by i.</p>
        <form>
          <div className="grid">
            <label htmlFor="entry">
              The text you want to mimimify
              <textarea onChange={onChangeHandle} id="entry" defaultValue="Paste your text here"></textarea>
            </label>
            <label htmlFor="output">
              Thiri yii gi:
              <textarea readOnly={true} id="output" value={mimimi}>
              </textarea>
            </label>
            <button
              type="button"
              onClick={onClickHandle}
            >
              Copy to clipboard
            </button>
          </div>
        </form>
      </main>
    </main>
  );
}

export default App;
