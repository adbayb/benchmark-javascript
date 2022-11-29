import { createRoot } from "react-dom/client";
import Case from "./cases/primitive";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<Case />);
