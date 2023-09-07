import CardList from "@components/CardList";

const DessertDeepening = () => {
  const imgPath = "/images/dessert";
  return (
    <CardList columns={3} mdColumns={4} labelBgClassName="bg-theone-color13">
      <CardList.CardItem
        imgUrl={`${imgPath}/dessert_deepening_img_1.jpg`}
        content={<p className="lg:w-2/3">레몬 구겔호프</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/dessert_deepening_img_2.jpg`}
        content={<p className="lg:w-2/3">메이플 피칸파이</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/dessert_deepening_img_3.jpg`}
        content={<p className="lg:w-2/3">에그타르트</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/dessert_deepening_img_4.jpg`}
        content={<p className="lg:w-2/3">얼그레이 갸토 쇼콜라</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/dessert_deepening_img_5.jpg`}
        content={<p className="lg:w-2/3">넛츠 가나슈 타르트</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/dessert_deepening_img_6.jpg`}
        content={<p className="lg:w-2/3">당근케이크</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/dessert_deepening_img_7.jpg`}
        content={<p className="lg:w-2/3">비스퀴 과일 롤</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/dessert_deepening_img_8.jpg`}
        content={<p className="lg:w-2/3">다쿠아즈 몽블랑</p>}
      />
    </CardList>
  );
};

export default DessertDeepening;
