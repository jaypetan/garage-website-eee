import { useParams } from "react-router-dom";
import Carousel from "../../components/carousel/Carousel";
import Typography from "../../components/typography/Typography";
import useFetch from "../../hooks/useFetch";
import { API_DOMAIN } from "../../utils/Constants";
import Transition from "../../components/transition/Transition";
import PageTemplate from "../../components/pageTemplate/PageTemplate";
import PageGap from "../../components/pageGap/PageGap";
import HeroImage from "../../components/heroImage/heroImage";

import styles from "./Database.module.css";

function Database() {
  // const params = useParams();
  // const id = params.id;
  const { data, isLoading } = useFetch({
    url: API_DOMAIN + "?type=projectInfo&index=1",
  });
  console.log(data);
  console.log(isLoading);
  return (
    <Transition isLoading={isLoading}>
      <PageTemplate>
        {data && (
          <PageGap>
            <HeroImage
              heading="Garage Database"
              src={data.bannerImage}
            />
          </PageGap>
        )}
      </PageTemplate>
    </Transition>
  );
}

export default Database;
