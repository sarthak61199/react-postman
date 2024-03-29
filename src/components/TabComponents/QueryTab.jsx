import { useUrlStore } from "../../state/store";
import DynamicFields from "../DynamicFields";

function QueryTab() {
  const queryParam = useUrlStore((state) => state.queryParam);
  const setQueryParam = useUrlStore((state) => state.setQueryParam);

  return (
    <DynamicFields
      fields={queryParam}
      setFields={setQueryParam}
      keyName="queryKey"
      valueName="queryValue"
      addObj={{ queryKey: "", queryValue: "" }}
      keyLabel="Query Key"
      valueLabel="Query Value"
    />
  );
}

export default QueryTab;
