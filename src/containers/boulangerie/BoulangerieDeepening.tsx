import CardList from "@components/CardList";

const BoulangerieDeepening = () => {
  const imgPath = "/images/boulangerie";
  return (
    <CardList columns={3} labelBgClassName="bg-theone-color9">
      <CardList.CardItem
        imgUrl={`${imgPath}/boulangerie_deepening_img_1.jpeg`}
        content={<p className="lg:w-2/3">크림도넛</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/boulangerie_deepening_img_2.jpeg`}
        content={<p className="lg:w-2/3">쇼콜라 바브카</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/boulangerie_deepening_img_3.jpeg`}
        content={<p className="lg:w-2/3">올리브 치아바타</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/boulangerie_deepening_img_4.jpeg`}
        content={<p className="lg:w-2/3">버터 프레첼</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/boulangerie_deepening_img_5.jpeg`}
        content={<p className="lg:w-2/3">에멘탈 치즈 베이글</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/boulangerie_deepening_img_6.jpeg`}
        content={<p className="lg:w-2/3">크로와상&뺑오 쇼콜라</p>}
      />
    </CardList>
  );
};

export default BoulangerieDeepening;
