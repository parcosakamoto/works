import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "styles/slider.module.scss";
import { forwardRef, useEffect, useState } from "react";

interface BasicSliderProps {
  images: string[];
}

// forwardRef で ref を受け取る
const BasicSlider = forwardRef<HTMLDivElement, BasicSliderProps>(
  ({ images }, ref) => {
    const [isSwiperEnabled, setIsSwiperEnabled] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsSwiperEnabled(window.innerWidth >= 600);
      };

      handleResize(); // 初期チェック
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    // Swiper無効時の静的表示
    if (!isSwiperEnabled) {
      return (
        <div ref={ref} className={`${styles.slideWrapper} hoverarea`}>
          {images.map((src: string, index: number) => (
            <div key={index} className={styles.slideImageWrapper}>
              <Image
                src={src}
                width={600}
                height={400}
                alt="Slider Image"
                sizes="(min-width: 1024px) 100vw, 60vw"
                className={styles.slideImage}
              />
            </div>
          ))}
        </div>
      );
    }

    // Swiper表示時のスライダー
    return (
      <div
        ref={ref}
        className={`${styles.slideWrapper} ${
          images.length >= 4 ? "hoverarea" : ""
        }`}
      >
        <Swiper
          modules={[Navigation]}
          breakpoints={{
            600: {
              slidesPerView: 3,
              spaceBetween: 1,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 1,
            },
          }}
          slidesPerView={"auto"}
          centeredSlides={false}
          loop={false}
          speed={1000}
          navigation
          pagination={{
            clickable: true,
          }}
          className={styles.slideWrapper}
        >
          {images.map((src: string, index: number) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                width={600}
                height={400}
                alt="Slider Image"
                sizes="(min-width: 1024px) 100vw, 60vw"
                className={styles.slideImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
);

BasicSlider.displayName = "BasicSlider";
export default BasicSlider;
