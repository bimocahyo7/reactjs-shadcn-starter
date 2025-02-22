import reactLogo from "./assets/react.svg";
import shadcnLogo from "./assets/shadcn-ui.png";
import viteLogo from "/vite.svg";
import tailwindLogo from "./assets/tailwind-css.svg";
import "./index.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <div className="flex gap-7">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="size-28" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="size-28" alt="React logo" />
        </a>
        <a href="https://ui.shadcn.com/" target="_blank">
          <img src={shadcnLogo} className="size-28" alt="Shadcn UI logo" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          <img src={tailwindLogo} className="size-36" alt="Tailwind CSS logo" />
        </a>
      </div>

      <div className="text-center">
        <h1 className="text-2xl font-bold text-slate-700">Vite + React 19 + Shadcn UI + Tailwind v4.0</h1>
        <p className="py-6">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;
