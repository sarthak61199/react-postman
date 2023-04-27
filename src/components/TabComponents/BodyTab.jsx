import { useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { useUrlStore } from "../../state/store";
import { Button } from "@mui/material";
import js_beautify from "js-beautify";
import { jsBeautifyOptions } from "../../constants";

function BodyTab() {
  const body = useUrlStore((state) => state.body);
  const setBody = useUrlStore((state) => state.setBody);
  const handleBodyChange = useCallback((value) => {
    setBody(value.trim());
  }, []);

  function beautifyBody() {
    const beautyJson = js_beautify(body, jsBeautifyOptions);
    setBody(beautyJson);
  }

  return (
    <>
      <CodeMirror
        value={body}
        height="250px"
        extensions={[json()]}
        onChange={handleBodyChange}
      />
      <Button onClick={beautifyBody} variant="contained">
        Beautify
      </Button>
    </>
  );
}

export default BodyTab;
