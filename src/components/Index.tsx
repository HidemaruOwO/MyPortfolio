import react from "react";
import Header from "./Header";

export default () => {
  return (
    <div>
      <Header />
      <div id="introduction" className="bg-white h-96 text-purple-mine p-8">
        <h2 className="font-bold text-xl sm:text-5xl m-2">
          こんにちは。ひでまるです！！
        </h2>
        <p className="sm:text-xl">
          プログラミングが好きな中学生のポートフォリオです。
          <br />
          とてもかわいくサイトを作ったのですが、どうでしたか？
          <br />
          私としてはかなり好みなページができました！！
        </p>
      </div>
      <div className="bg-purple-mine h-96 text-slate-50"></div>
    </div>
  );
};
