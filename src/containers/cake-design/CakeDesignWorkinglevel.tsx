import CardList from "@components/CardList";

const CakeDesignWorkinglevel = () => {
  const imgPath = "/images/cake-design";
  return (
    <CardList columns={3} labelBgClassName="bg-theone-color13">
      <CardList.CardItem
        imgUrl={`${imgPath}/cakedesign_workinglevel_img_1.jpeg`}
        content={<p className="lg:w-2/3">빅토리아 케이크</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/cakedesign_workinglevel_img_2.jpeg`}
        content={<p className="lg:w-2/3">바스크 치즈 케이크</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/cakedesign_workinglevel_img_3.jpeg`}
        content={<p className="lg:w-2/3">마스카포네 티라미슈</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/cakedesign_workinglevel_img_4.jpeg`}
        content={<p className="lg:w-2/3">요거트 보틀케이크</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/cakedesign_workinglevel_img_5.jpeg`}
        content={<p className="lg:w-2/3">제철과일 샤를로트</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/cakedesign_workinglevel_img_6.jpeg`}
        content={<p className="lg:w-2/3">체리 포레누아</p>}
      />
    </CardList>
  );
};

export default CakeDesignWorkinglevel;
