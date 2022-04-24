import { UseApp } from "../contexts/AppContext";

function contact() {
  const { contact } = UseApp();
  const data = contact;
  return <>{data}</>;
}

export default contact;
