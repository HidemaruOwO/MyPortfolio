import react from "react";
import Header from "./Header";
import { Row, Col } from "react-bootstrap";

export default () => {
  return (
    <div>
      <Header />
      <div id="introduction" className="bg-white h-96 text-purple-mine p-8">
        <h2 className="font-bold text-xl sm:text-5xl">
          こんにちは。ひでまるです！！
        </h2>
        <Row className="mt-12 lg:mt-20">
          <Col>
            <p className="text-base sm:text-xl">
              プログラミングが好きな中学生のポートフォリオです。
              <br />
              とてもかわいくサイトを作ったのですが、どうでしたか？
              <br />
              私としてはかなり好みなページができました！！
            </p>
          </Col>
          <Col>
            <img
              height="200"
              width="200"
              src="/image/square_slime.png"
              alt="丸いスライムアイコン"
            />
          </Col>
        </Row>
      </div>
      <div className="bg-purple-mine h-96 text-slate-50 p-8">
        <h2 className="font-bold text-xl sm:text-5xl">何をしているの？</h2>
        <div className="mt-12 lg:mt-20">
          <p className="text-base sm:text-xl">
            普段はプログラミングとデザインを主軸にして趣味を展開してます。
            <br />
            プログラミングに関してですが、好きな言語はGoとRustであり。好きなエディターはVimが好きです。
            <br />
            デザインに関しては、このようなモダンなウェブページを作成したり。または壁紙を作ったり。ブログのOGPを作ったりして楽しんでます。
            <br />
            このサイトは上のプログラミングとデザインの一貫として作成しました。
          </p>
        </div>
      </div>
    </div>
  );
};
