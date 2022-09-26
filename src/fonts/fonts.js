import { createGlobalStyle } from 'styled-components'

import AlmarenaRegular from './Almerena/Almarena-Regular.otf'
import SilkaRegular from './Silka/Silka-Regular.otf'
import SilkaMedium from './Silka/Silka-Medium.otf'
import SilkaSemiBold from './Silka/Silka-SemiBold.otf'
import SilkaLight from './Silka/Silka-Light.otf'
import SilkaExtraLight from './Silka/Silka-ExtraLight.otf'

export default createGlobalStyle`
@font-face {
    font-family: 'AlmarenaRegular';
    src: local('AlmarenaRegular'),
    url(${AlmarenaRegular}) format('opentype');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'SilkaRegular';
    src: local('SilkaRegular'),
    url(${SilkaRegular}) format('opentype');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'SilkaMedium';
    src: local('SilkaMedium'),
    url(${SilkaMedium}) format('opentype');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'SilkaSemiBold';
    src: local('SilkaSemiBold'),
    url(${SilkaSemiBold}) format('opentype');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'SilkaLight';
    src: local('SilkaLight'),
    url(${SilkaLight}) format('opentype');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'SilkaExtraLight';
    src: local('SilkaExtraLight'),
    url(${SilkaExtraLight}) format('opentype');
    font-weight: 300;
    font-style: normal;
}
`
