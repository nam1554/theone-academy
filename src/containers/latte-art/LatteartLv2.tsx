import CardList from "@components/CardList";

const LatteartLv2 = () => {
  const imgPath = "/images/latte-art";
  return (
    <CardList columns={3} labelBgClassName="bg-theone-color12">
      <CardList.CardItem
        imgUrl={`${imgPath}/latteart_lv2_img_1.jpeg`}
        content={
          <p className="lg:w-2/3">
            크레마와 우유폼의 이해
            <br />
            우유 스티밍 복습
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/latteart_lv2_img_2.jpeg`}
        content={
          <p className="lg:w-2/3">
            기본 패턴 복습
            <br />
            면하트, 2단 하트, 3단 하트, 핸들링
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/latteart_lv2_img_3.jpeg`}
        content={
          <p className="lg:w-2/3">
            결하트 및 결튤립
            <br />
            핸들링 교정, 결하트, 결튤립
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/latteart_lv2_img_4.jpeg`}
        content={
          <p className="lg:w-2/3">
            로제타 패턴 연습
            <br />
            유량, 낙차 제어 연습
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/latteart_lv2_img_5.jpeg`}
        content={
          <p className="lg:w-2/3">
            패턴복습
            <br />
            핸들링 패턴 및 기본 면 패턴복습
          </p>
        }
      />
    </CardList>
  );
};

export default LatteartLv2;
