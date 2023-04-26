import { useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { useUrlStore } from "../../state/store";

function BodyTab() {
  const body = useUrlStore((state) => state.body);
  const setBody = useUrlStore((state) => state.setBody);
  const handleBodyChange = useCallback((value) => {
    setBody(value);
  }, []);

  return (
    <CodeMirror
      value={body}
      height="250px"
      extensions={[json()]}
      onChange={handleBodyChange}
    />
  );
}

export default BodyTab;
