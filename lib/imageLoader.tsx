type PropTypes = {
  src: string;
  width: number;
};

export const imageLoader = (props: PropTypes) => {
  const { src, width } = props;
  return src;
};

export default imageLoader;
