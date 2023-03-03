import { transparentize } from 'polished';

import { colors } from './colors';
import {CallTypes} from '~/components/CallEntry';

export type PalleteStructure = typeof lightPalette;

const lightPalette = {
   placeholder: transparentize(0.85, colors.darkestSalmon),
   card: colors.white,
   body: colors.darkestSalmon,
   secondary: colors.darkSalmon,
   button: colors.lightestSalmon,
   bg: colors.lightestSalmon,
   white: colors.white,
   [CallTypes.ANSWERED]: colors.darkSalmon,
   [CallTypes.VOICEMAIL]: colors.salmon,
   [CallTypes.MISSED]: colors.red,
   bottomBar: colors.lightSalmon,
   divider: colors.lightSalmon,
   strongDivider: colors.salmon,
};

const darkPalette: PalleteStructure = {
   ...lightPalette,
};

export const palletes: {
   light: PalleteStructure;
   dark: PalleteStructure;
} = {
   dark: darkPalette,
   light: lightPalette,
};
