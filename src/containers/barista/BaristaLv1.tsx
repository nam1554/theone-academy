import CardList from "@components/CardList";

const BaristaLv1 = () => {
  const imgPath = "/images/barista";
  return (
    <CardList columns={3} labelBgClassName="bg-theone-color14">
      <CardList.CardItem
        imgUrl={`${imgPath}/barista_lv1_img_1.jpeg`}
        content={
          <p className="lg:w-2/3">
            커피 머신 작동법
            <br />
            기본적인 커피추출
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/barista_lv1_img_2.jpeg`}
        content={
          <p className="lg:w-2/3">
            성분추출,채널링
            <br />
            분쇄조절
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/barista_lv1_img_3.jpeg`}
        content={
          <p className="lg:w-2/3">
            스티밍[공기주입]
            <br />
            스트밍[혼합]
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/barista_lv1_img_4.jpeg`}
        content={
          <p className="lg:w-2/3">
            우유 유광 제어
            <br />
            낙차를 활용한 푸어링
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/barista_lv1_img_5.jpeg`}
        content={
          <p className="lg:w-2/3">
            라떼&카푸치노 차이
            <br />
            원&하트 푸어링
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/barista_lv1_img_6.jpeg`}
        content={<p className="lg:w-2/3">시험회차[테스트]</p>}
      />
    </CardList>
  );
};

export default BaristaLv1;
