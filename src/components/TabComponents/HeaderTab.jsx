import { useUrlStore } from "../../state/store";
import DynamicFields from "../DynamicFields";

function HeaderTab() {
  const headers = useUrlStore((state) => state.headers);
  const setHeaders = useUrlStore((state) => state.setHeaders);

  return (
    <DynamicFields
      fields={headers}
      setFields={setHeaders}
      keyName="headerKey"
      valueName="headerValue"
      addObj={{ headerKey: "", headerValue: "" }}
      keyLabel="Header Key"
      valueLabel="Header Value"
    />
  );
}

export default HeaderTab;
