import { createRoot } from "react-dom/client";
import { Case } from "./Case";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<Case />);
