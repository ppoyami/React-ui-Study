import { css } from 'styled-components';

const sizes = {
  mobile: 320,
  tablet: 768,
  laptop: 1024,
  desktop: 2560,
};

const device = {
  mobile: `screen and (max-width: ${sizes.mobile})`,
  tablet: `screen and (max-width: ${sizes.tablet})`,
  laptop: `screen and (max-width: ${sizes.laptop})`,
  desktop: `screen and (max-width: ${sizes.desktop})`,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export { media, device };
