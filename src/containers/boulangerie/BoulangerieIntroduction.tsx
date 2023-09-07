import CardList from "@components/CardList";

const BoulangerieIntroduction = () => {
  const imgPath = "/images/boulangerie";
  return (
    <CardList columns={3} labelBgClassName="bg-theone-color9">
      <CardList.CardItem
        imgUrl={`${imgPath}/boulangerie_introduction_img_1.jpeg`}
        content={<p className="lg:w-2/3">콘마요 모닝빵</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/boulangerie_introduction_img_2.jpeg`}
        content={<p className="lg:w-2/3">블루베리 식빵</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/boulangerie_introduction_img_3.jpeg`}
        content={<p className="lg:w-2/3">먹물시오</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/boulangerie_introduction_img_4.jpeg`}
        content={<p className="lg:w-2/3">모찌 소보로</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/boulangerie_introduction_img_5.jpeg`}
        content={<p className="lg:w-2/3">크랜베리 깜빠뉴</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/boulangerie_introduction_img_6.jpeg`}
        content={<p className="lg:w-2/3">쁘띠 바게트&하드롤</p>}
      />
    </CardList>
  );
};

export default BoulangerieIntroduction;
