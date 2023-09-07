import CardList from "@components/CardList";

const CakeDesignDeepening = () => {
  const imgPath = "/images/cake-design";
  return (
    <CardList columns={3} mdColumns={4} labelBgClassName="bg-theone-color13">
      <CardList.CardItem
        imgUrl={`${imgPath}/cakedesign_deepening_img_1.jpeg`}
        content={<p className="lg:w-2/3">케이크 아이싱 종류(쉬폰)</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/cakedesign_deepening_img_2.jpeg`}
        content={<p className="lg:w-2/3">아이싱 응용법(사각) 및 시트제작</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/cakedesign_deepening_img_3.jpeg`}
        content={
          <p className="lg:w-2/3">쉬폰케이크 디자인 및 디자인 실전 연습</p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/cakedesign_deepening_img_4.jpeg`}
        content={
          <p className="lg:w-2/3">
            플라워 파이핑(장미,작약) 및 조색 방법 이해 제조
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/cakedesign_deepening_img_5.jpeg`}
        content={
          <p className="lg:w-2/3">
            플라워 파이핑(여러가지 꽃) 및 조색 실습(그라데이션)
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/cakedesign_deepening_img_6.jpeg`}
        content={<p className="lg:w-2/3">플라워 파이핑 실습 시트제작</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/cakedesign_deepening_img_7.jpeg`}
        content={
          <p className="lg:w-2/3">
            다양한 크림 제조 및 컬러나 디자인에 따른 꽃 배치 연습
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/cakedesign_deepening_img_8.jpeg`}
        content={<p className="lg:w-2/3">나만의 플라워 케이크 제작</p>}
      />
    </CardList>
  );
};

export default CakeDesignDeepening;
