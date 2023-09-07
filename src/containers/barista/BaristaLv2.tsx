import CardList from "@components/CardList";

const BaristaLv2 = () => {
  const imgPath = "/images/barista";
  return (
    <CardList columns={3} lgColumns={4} labelBgClassName="bg-theone-color14">
      <CardList.CardItem
        imgUrl={`${imgPath}/barista_lv2_img_1.jpeg`}
        content={
          <p className="lg:w-2/3">
            기초 추출복습
            <br />
            원두 특성파악
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/barista_lv2_img_2.jpeg`}
        content={
          <p className="lg:w-2/3">
            원두특성파악
            <br />
            원두양에 따른 변화
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/barista_lv2_img_3.jpeg`}
        content={
          <p className="lg:w-2/3">
            추출양에 따른 변화
            <br />
            분쇄도 따른 변화화
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/barista_lv2_img_4.jpeg`}
        content={
          <p className="lg:w-2/3">
            라떼아트
            <br />
            유량제어 연습
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/barista_lv2_img_5.jpeg`}
        content={
          <p className="lg:w-2/3">
            라떼아트 2단,3단하트
            <br />
            핸들링 연습
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/barista_lv2_img_6.jpeg`}
        content={<p className="lg:w-2/3">사전테스트</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/barista_lv2_img_7.jpeg`}
        content={<p className="lg:w-2/3">시험회차[테스트]</p>}
      />
    </CardList>
  );
};

export default BaristaLv2;
