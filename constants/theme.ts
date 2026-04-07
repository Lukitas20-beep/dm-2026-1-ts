// Raw color palette — Tailwind CSS Slate, Blue and Green scales

export const Colors = {
  white: '#FFFFFF',

  slate: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },

  blue: {
    50: '#EFF6FF',
    400: '#60A5FA',
    500: '#3B82F6',
    600: '#2563EB',
    900: '#1E3A5F',
  },

  green: {
    400: '#4ADE80',
    600: '#16A34A',
  },
};

// Semantic theme tokens — map visual roles to raw color values

export const LightTheme = {
  /** Page / screen background */
  background: Colors.slate[50],
  /** Card, modal and header surface */
  surface: Colors.white,
  /** Footer and secondary surface areas */
  surfaceSecondary: Colors.slate[100],

  /** Primary text */
  text: Colors.slate[900],
  /** Secondary / supporting text */
  textSecondary: Colors.slate[500],
  /** Tertiary / subdued text (progress labels, captions) */
  textTertiary: Colors.slate[600],

  /** Primary divider / border */
  border: Colors.slate[200],
  /** Secondary divider (footer borders, input borders) */
  borderSecondary: Colors.slate[300],

  /** Brand accent — icons, indicators, active states */
  accent: Colors.blue[500],
  /** Tinted background behind accent icons */
  accentBackground: Colors.blue[50],

  /** Success / completion state */
  success: Colors.green[600],

  /** Switch track — off state */
  switchTrackOff: Colors.slate[300],
  /** Switch track — on state */
  switchTrackOn: Colors.blue[500],
  /** Switch thumb */
  switchThumb: Colors.white,
};

export const DarkTheme = {
  background: Colors.slate[900],
  surface: Colors.slate[800],
  surfaceSecondary: Colors.slate[800],

  text: Colors.slate[100],
  textSecondary: Colors.slate[400],
  textTertiary: Colors.slate[300],

  border: Colors.slate[700],
  borderSecondary: Colors.slate[700],

  accent: Colors.blue[400],
  accentBackground: Colors.blue[900],

  success: Colors.green[400],

  switchTrackOff: Colors.slate[600],
  switchTrackOn: Colors.blue[600],
  switchThumb: Colors.white,
};

/** Structural type for both LightTheme and DarkTheme. */
export type Theme = typeof LightTheme;

// Spacing scale — 4 px base unit

export const Spacing = {
  /** 4 px — tight gaps between inline elements */
  xs: 4,
  /** 8 px — small gaps, scroll padding */
  sm: 8,
  /** 10 px — default gap between items */
  md: 10,
  /** 12 px — card internal gaps */
  lg: 12,
  /** 14 px — vertical padding for rows and headers */
  xl: 14,
  /** 16 px — horizontal padding for rows and headers */
  '2xl': 16,
  /** 24 px — padding for wider containers and screens */
  '3xl': 24,
};

// Typography scale

export const FontSize = {
  /** 12 px — timestamps, labels */
  xs: 12,
  /** 14 px — progress text, captions */
  sm: 14,
  /** 15 px — card titles */
  md: 15,
  /** 16 px — section headers, input text */
  lg: 16,
  /** 17 px — screen titles */
  xl: 17,
  /** 18 px — list items */
  '2xl': 18,
  /** 32 px — large display titles */
  '4xl': 32,
};

// Border radius scale

export const BorderRadius = {
  /** 8 px — subtle rounding */
  sm: 8,
  /** 10 px — icon wrappers */
  md: 10,
  /** 12 px — inputs, cards */
  lg: 12,
  /** 9999 px — fully circular (profile images, chips) */
  full: 9999,
};
