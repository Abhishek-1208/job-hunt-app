import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";

export default function LoaderComponent() {
  return (
    <div className="sweet-loading text-center">
      <RingLoader color={"#001529"} />
    </div>
  );
}
