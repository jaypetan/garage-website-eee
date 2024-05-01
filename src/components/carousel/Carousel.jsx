import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ReactComponent as Back } from "../../icons/arrow_back_ios.svg";
import { ReactComponent as Next } from "../../icons/arrow_forward_ios.svg";
import styles from "./Carousel.module.css";
import Typography from "../typography/Typography";
import Image from "../image/Image";
import Modal from "../modal/Modal";

const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button className={styles["pagination"]} {...restProps}>
      <Back className={styles["icon"]} />
    </button>
  );
};

const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button className={styles["pagination"]} {...restProps}>
      <Next className={styles["icon"]} />
    </button>
  );
};

const Carousel = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ skipSnaps: true });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [focusImage, setFocusImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, []);

  const handleImageClick = (imgsrc, index) => {
    if (currentIndex === index) setFocusImage(imgsrc);
    else emblaApi.scrollTo(index);
  };

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className={styles["carousel-container"]}>
      <div ref={emblaRef}>
        <div className={styles["images"]}>
          {images.map((imgsrc, index) => (
            <div
              key={imgsrc}
              className={styles["image-slide"]}
              onClick={() => handleImageClick(imgsrc, index)}
              style={{
                opacity: `${
                  Math.abs(currentIndex - index) > 1
                    ? 0
                    : Math.abs(currentIndex - index) > 0
                    ? 0.5
                    : 1
                }`,
              }}
            >
              <Image src={imgsrc} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className={styles["carousel-controls"]}>
        <div className={styles["carousel-pagination"]}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        {emblaApi && (
          <Typography variant="body">
            {(currentIndex + 1).toString().padStart(2, "0")}/
            {images.length.toString().padStart(2, "0")}
          </Typography>
        )}
      </div>
      <Modal open={!!focusImage} onClose={() => setFocusImage("")}>
        <div className={styles["focus-image"]}>
          <Image src={focusImage} alt="" onClick={(e) => e.stopPropagation()} />
        </div>
      </Modal>
    </section>
  );
};

export default Carousel;
