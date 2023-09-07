import CardList from "@components/CardList";

const LatteartLv1 = () => {
  const imgPath = "/images/latte-art";
  return (
    <CardList columns={3} labelBgClassName="bg-theone-color12">
      <CardList.CardItem
        imgUrl={`${imgPath}/latteart_lv1_img_1.jpeg`}
        content={
          <p className="lg:w-2/3">
            스티밍과 푸어링
            <br />
            푸어링시 주의사항
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/latteart_lv1_img_2.jpeg`}
        content={
          <p className="lg:w-2/3">
            기본적인 푸어링 연습
            <br />
            물과 우유로 유량제어 연습
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/latteart_lv1_img_3.jpeg`}
        content={
          <p className="lg:w-2/3">
            면 하트[1단 하트]
            <br />원 띄우기 복습
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/latteart_lv1_img_4.jpeg`}
        content={
          <p className="lg:w-2/3">
            2, 3단 하트&핸들링
            <br />
            면하트 복습
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/latteart_lv1_img_5.jpeg`}
        content={
          <p className="lg:w-2/3">
            기본패턴 복습
            <br />
            패턴들의 주의사항 이해도 확인
          </p>
        }
      />
    </CardList>
  );
};

export default LatteartLv1;
