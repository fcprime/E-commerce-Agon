import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={255}
    height={370}
    viewBox="0 0 255 370"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect
      x="15"
      y="195"
      rx="0"
      ry="0"
      width="95"
      height="20"
    />
    <rect
      x="15"
      y="224"
      rx="0"
      ry="0"
      width="213"
      height="46"
    />
    <rect
      x="50"
      y="25"
      rx="0"
      ry="0"
      width="150"
      height="150"
    />
    <rect
      x="15"
      y="289"
      rx="0"
      ry="0"
      width="103"
      height="18"
    />
    <rect
      x="34"
      y="324"
      rx="0"
      ry="0"
      width="79"
      height="28"
    />
    <rect
      x="172"
      y="324"
      rx="9"
      ry="9"
      width="60"
      height="25"
    />
  </ContentLoader>
);

export default Skeleton;
