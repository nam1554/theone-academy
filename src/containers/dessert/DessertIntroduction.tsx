import CardList from "@components/CardList";

const DessertIntroduction = () => {
  const imgPath = "/images/dessert";
  return (
    <CardList columns={3} mdColumns={4} labelBgClassName="bg-theone-color13">
      <CardList.CardItem
        imgUrl={`${imgPath}/dessert_introduction_img_1.jpg`}
        content={
          <p className="lg:w-2/3">
            아메리칸쿠키(2종)
            <br />
            클래식/너티초콜릿
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/dessert_introduction_img_2.jpg`}
        content={<p className="lg:w-2/3">갈레트오쇼콜라</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/dessert_introduction_img_3.jpg`}
        content={<p className="lg:w-2/3">마들렌2종(커스터드, 레밍턴)</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/dessert_introduction_img_4.jpg`}
        content={
          <p className="lg:w-2/3">
            휘낭시에(2종)
            <br />
            무화과크림/치즈누네띠네
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/dessert_introduction_img_5.jpg`}
        content={<p className="lg:w-2/3">얼그레이스콘</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/dessert_introduction_img_6.jpg`}
        content={<p className="lg:w-2/3">티라미수컵케이크</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/dessert_introduction_img_7.jpeg`}
        content={<p className="lg:w-2/3">솔티카라멜 파운드</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/dessert_introduction_img_8.jpeg`}
        content={<p className="lg:w-2/3">블루베리 치즈 크럼블</p>}
      />
    </CardList>
  );
};

export default DessertIntroduction;
