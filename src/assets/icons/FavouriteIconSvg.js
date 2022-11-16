import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4_394)">
<path d="M12.515 23.3785L10.6175 21.5989C8.67417 19.7721 6.91893 17.9593 5.3518 16.1605C3.78393 14.3623 3 12.3804 3 10.2147C3 8.44444 3.5775 6.9661 4.7325 5.77966C5.8875 4.59322 7.32667 4 9.05 4C10.0217 4 10.9383 4.21168 11.8 4.63503C12.6617 5.05913 13.395 5.63842 14 6.37288C14.605 5.63842 15.3383 5.05913 16.2 4.63503C17.0617 4.21168 17.9783 4 18.95 4C20.6733 4 22.1125 4.59322 23.2675 5.77966C24.4225 6.9661 25 8.44444 25 10.2147C25 12.3804 24.2208 14.3672 22.6625 16.1751C21.1042 17.9831 19.335 19.8004 17.355 21.6271L15.485 23.3785C15.0633 23.7928 14.5683 24 14 24C13.4317 24 12.9367 23.7928 12.515 23.3785Z" stroke="#9763FF" stroke-width="2" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_4_394">
<rect width="28" height="28" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const FavouriteIconSvg = ({ width, height }) => <SvgXml xml={xml} width={width} height={height} />;

export default FavouriteIconSvg