import react from "react";

export default () => {
  return (
    <div>
      <div className="h-56 sm:h-96 min-w-full text-gray-900 ">
        <h3 className="font-round-medium text-lg sm:text-xl mx-16 mt-4 sm:mt-8 text-right">
          <nav>ぷよっとした</nav>
          <nav>かわいいポートフォリオ</nav>
        </h3>

        <h1 className="mt-2 sm:mt-14 mx-14 text-3xl sm:text-6xl md:text-7xl font-round-bold">
          <nav>ひでまるの</nav>
          <nav>　 ポートフォリオ</nav>
        </h1>
        <a
          className="btn btn-border font-round-bold mt-4 sm:mt-12 mx-24 sm:mx-12"
          href="/#introduction"
        >
          自己紹介
        </a>
      </div>
      <div className="bg-cyan-700 h-16"></div>
    </div>
  );
};
