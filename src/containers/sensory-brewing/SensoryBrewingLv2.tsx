import CardList from "@components/CardList";

const SensoryBrewingLv2 = () => {
  const imgPath = "/images/sensory-brewing";
  return (
    <CardList columns={3} mdColumns={4} labelBgClassName="bg-theone-color9">
      <CardList.CardItem
        imgUrl={`${imgPath}/brewing_lv2_img_1.jpeg`}
        content={
          <p className="lg:w-2/3">
            미각 5원미 이해
            <br />
            아로마 키트 연습
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/brewing_lv2_img_2.jpeg`}
        content={
          <p className="lg:w-2/3">
            맛의 강도 차이
            <br />
            인지 연습
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/brewing_lv2_img_3.jpeg`}
        content={
          <p className="lg:w-2/3">
            특성 차이 비교 실습
            <br />
            트라이 앵글 커핑 실습
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/brewing_lv2_img_4.jpeg`}
        content={
          <p className="lg:w-2/3">
            커핑 테이블 셋팅 실습
            <br />
            커핑시 발생 오류
            <br />
            주의사항 이해
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/brewing_lv2_img_5.jpeg`}
        content={
          <p className="lg:w-2/3">
            TDS+추출 수율이해
            <br />
            브루잉 컨트롤 차트이해
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/brewing_lv2_img_6.jpeg`}
        content={<p className="lg:w-2/3">드리퍼+블루밍차이</p>}
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/brewing_lv2_img_7.jpeg`}
        content={
          <p className="lg:w-2/3">
            추출 변수 이해
            <br />
            물온도,물비율 입자
          </p>
        }
      />
      <CardList.CardItem
        imgUrl={`${imgPath}/brewing_lv2_img_8.jpeg`}
        content={
          <p className="lg:w-2/3">
            추출변수 통제
            <br />
            TDS,추출 수율 조절
          </p>
        }
      />
    </CardList>
  );
};

export default SensoryBrewingLv2;
