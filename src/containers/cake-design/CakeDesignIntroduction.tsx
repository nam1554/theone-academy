import CardList from "@components/CardList";

const CakeDesignIntroduction = () => {
  const imgPath = "/images/cake-design";
  return (
    <CardList columns={3} mdColumns={4} labelBgClassName="bg-theone-color13">
      <CardList.CardItem
        imgUrl={`${imgPath}/cakedesign_introduction_img_1.jpeg`}
        content={<p className="lg:w-2/3">케이크 아이싱 종류(원형)</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/cakedesign_introduction_img_2.jpeg`}
        content={
          <p className="lg:w-2/3">
            케이크 아이싱 종류(돔형)
            <br />
            기초 파이핑
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/cakedesign_introduction_img_3.jpeg`}
        content={
          <p className="lg:w-2/3">
            제누아즈 제조 이해
            <br /> 및 각종 깍지를 이용한 파이핑 연습
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/cakedesign_introduction_img_4.jpeg`}
        content={<p className="lg:w-2/3">도안 및 실전 케이크 제작</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/cakedesign_introduction_img_5.jpeg`}
        content={<p className="lg:w-2/3">레터링, 실전 파이핑 응용법</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/cakedesign_introduction_img_6.jpeg`}
        content={
          <p className="lg:w-2/3">
            레이스 파이핑 응용,
            <br />
            커스텀 케이크 시트제작
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/cakedesign_introduction_img_7.jpeg`}
        content={
          <p className="lg:w-2/3">
            다양한 크림 제조법 이해,
            <br />
            도안 파이핑
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/cakedesign_introduction_img_8.jpeg`}
        content={<p className="lg:w-2/3">나만의 커스텀 케이크 제작</p>}
      />
    </CardList>
  );
};

export default CakeDesignIntroduction;
