import CardList from "@components/CardList";

const SensoryBrewingLv1 = () => {
  const imgPath = "/images/sensory-brewing";
  return (
    <CardList columns={3} mdColumns={4} labelBgClassName="bg-theone-color9">
      <CardList.CardItem
        imgUrl={`${imgPath}/brewing_lv1_img_1.jpeg`}
        content={
          <p className="lg:w-2/3">
            센서리 기초이론
            <br />
            커피 향미 인지 훈련
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/brewing_lv1_img_2.jpeg`}
        content={
          <p className="lg:w-2/3">
            아로마키트 카테고리
            <br />
            향미 평가훈련
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/brewing_lv1_img_3.jpeg`}
        content={
          <p className="lg:w-2/3">
            커핑 테이블 셋팅연습
            <br />
            아로마 키트 카테고리
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/brewing_lv1_img_4.jpeg`}
        content={
          <p className="lg:w-2/3">
            커핑 테이블 셋팅 실습
            <br />
            SCA커핑시트 작성연습
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/brewing_lv1_img_5.jpeg`}
        content={
          <p className="lg:w-2/3">
            브루잉 기초 이론
            <br />
            브루잉 방식의 차이
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/brewing_lv1_img_6.jpeg`}
        content={<p className="lg:w-2/3">푸어방식+린싱</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/brewing_lv1_img_7.jpeg`}
        content={
          <p className="lg:w-2/3">
            추출 변수 이해
            <br />
            구간별 커피향미
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/brewing_lv1_img_8.jpeg`}
        content={<p className="lg:w-2/3">추출 변수[입자크기] 물온도</p>}
      />
    </CardList>
  );
};

export default SensoryBrewingLv1;
