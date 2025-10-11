import Image from "next/image";
import { Navigation, FreeMode } from "swiper/modules"; // ← FreeModeを追加
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "styles/slider.module.scss";
import { forwardRef } from "react";

interface BasicSliderProps {
  images: string[];
  index?: number;
}

const BasicSlider = forwardRef<HTMLDivElement, BasicSliderProps>(
  ({ images, index }, ref) => {
    const isEager = index === 0 || index === 1; // ← 最初の2件のみ eager

    return (
      <div
        ref={ref}
        className={`${styles.slideWrapper} ${
          images.length >= 4 ? "hoverarea" : ""
        }`}
      >
        <Swiper
          modules={[Navigation, FreeMode]} // ← FreeModeを追加
          freeMode={{
            enabled: true,
            momentum: true,
            momentumRatio: 1.6,
            momentumVelocityRatio: 1.4,
            sticky: false,
          }}
          touchReleaseOnEdges={true}
          breakpoints={{
            0: {
              slidesPerView: "auto",
              spaceBetween: 1,
              freeMode: true, // ← モバイル専用オプション
            },
            601: {
              slidesPerView: 3,
              spaceBetween: 1,
              freeMode: false,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 1,
              freeMode: false,
            },
          }}
          loop={false}
          speed={800}
          navigation
          pagination={{ clickable: true }}
          className={styles.slideWrapper}
        >
          {images.map((src: string, i: number) => (
            <SwiperSlide key={i}>
              <Image
                src={src}
                width={600}
                height={400}
                alt="Slider Image"
                sizes="(max-width: 768px) 90vw, (min-width: 1024px) 100vw, 60vw"
                className={styles.slideImage}
                loading={isEager ? "eager" : "lazy"}
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
