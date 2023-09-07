import CardList from "@components/CardList";

const Roasting = () => {
  const imgPath = "/images/roasting";
  return (
    <CardList columns={3} mdColumns={4} labelBgClassName="bg-theone-color11">
      <CardList.CardItem
        imgUrl={`${imgPath}/roasting_img_1.jpeg`}
        content={
          <p className="lg:w-2/3">
            로스팅의 이해
            <br />
            로스터기 구조 이해
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/roasting_img_2.jpeg`}
        content={
          <p className="lg:w-2/3">
            로스팅 프로파일 이해
            <br />
            로스팅 단계별 변화 이해
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/roasting_img_3.jpeg`}
        content={
          <p className="lg:w-2/3">
            로스팅 시간의 이해
            <br />
            시간에 따른 차이 이해
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/roasting_img_4.jpeg`}
        content={
          <p className="lg:w-2/3">
            로스팅 포인트의 이해
            <br />
            로스팅 포인트 따른
            <br />
            차이 이해(화력변화x)
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/roasting_img_5.jpeg`}
        content={
          <p className="lg:w-2/3">
            화역, 댐퍼 이해
            <br />
            화력조절 및 댐퍼조절 변화 이해
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/roasting_img_6.jpeg`}
        content={
          <p className="lg:w-2/3">
            화력, 댐퍼 변화율
            <br />
            이용한 프로파일 작성 및 활용
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/roasting_img_7.jpeg`}
        content={<p className="lg:w-2/3">DTR과 디펙트의 이해</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/roasting_img_8.jpeg`}
        content={
          <p className="lg:w-2/3">
            디펙트의 이해
            <br />
            베이크드, 스코칭, 티핑
          </p>
        }
      />
    </CardList>
  );
};

export default Roasting;
