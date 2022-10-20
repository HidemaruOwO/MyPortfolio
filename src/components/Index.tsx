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
        <Row className="mt-12 lg:mt-20" >
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
      <div className="bg-purple-mine h-96 text-slate-50"></div>
    </div>
  );
};
