import BasicSlider from "./slider";
import styles from "styles/workspost.module.scss";
import MouseStalker from "./components/MouseStalker";
interface WorkItem {
  images: string[];
  link: string;
  title: string;
  description: string;
  tags: string[];
}
// Removed unused BasicSliderProps interface
const worksItems: WorkItem[] = [
  {
    images: [
      "/works/koke-latte_01.png",
      "/works/koke-latte_02.png",
      "/works/koke-latte_03.png",
      "/works/koke-latte_04.png",
    ],
    link: "#",
    title: "title",
    description: "description",
    tags: ["design", "web", "written"],
  },

  {
    images: [
      "/works/kumofre_01.png",
      "/works/koke-latte_02.png",
      "/works/koke-latte_03.png",
    ],
    link: "",
    title: "title",
    description: "Description",
    tags: ["design"],
  },
];

export default function WorksPost() {
  return (
    <div className={styles.container}>
      {worksItems.map((item: WorkItem, index: number) => (
        <article key={index} className={styles.article}>
          <BasicSlider images={item.images} />
          <MouseStalker />
          {item.link ? (
            <a href={item.link} target="_blank">
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.description}>{item.description}</p>
              <p className={styles.tags}>
                {item.tags.map((tag: string, tagIndex: number) => (
                  <span key={tagIndex} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </p>
            </a>
          ) : (
            <>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.description}>{item.description}</p>
              <p className={styles.tags}>
                {item.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </p>
            </>
          )}
        </article>
      ))}
    </div>
  );
}
