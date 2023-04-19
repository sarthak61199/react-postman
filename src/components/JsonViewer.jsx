import { useBodyStore } from "../state/store";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";

function JsonViewer() {
  const bodyDisplay = useBodyStore((state) => state.bodyDisplay);
  return (
    <CodeMirror
      value={bodyDisplay}
      height="300px"
      extensions={[json()]}
      editable={false}
    />
  );
}

export default JsonViewer;
