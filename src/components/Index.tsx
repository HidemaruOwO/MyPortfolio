import react from "react";
import Header from "./Header";

export default () => {
  return (
    <div>
      <Header />
      <div id="introduction" className="bg-white h-96 text-purple-mine p-8">
        <h2 className="font-bold text-xl sm:text-5xl">こんにちは。ひでまるです！！</h2>
      </div>
      <div className="bg-purple-mine h-96 text-slate-50"></div>
    </div>
  );
};
