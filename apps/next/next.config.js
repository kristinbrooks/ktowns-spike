const { withExpo } = require('@expo/next-adapter')
const withFonts = require('next-fonts')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
  'solito',
  'dripsy',
  '@dripsy/core',
  'moti',
  'app'
])

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reanimated (and thus, Moti) doesn't work with strict mode currently...
  // https://github.com/nandorojo/moti/issues/224
  // https://github.com/necolas/react-native-web/pull/2330
  // https://github.com/nandorojo/moti/issues/224
  // once that gets fixed, set this back to true
  reactStrictMode: false,
  webpack5: true,
  images: {
    disableStaticImages: true
  },
  experimental: {
    // advised to set this to true to fix error here: https://github.com/nandorojo/solito/issues/265
    forceSwcTransforms: true,
    swcPlugins: [[require.resolve('./plugins/swc_plugin_reanimated.wasm')]]
  }
}

// This is causing warnings. We could do a workaround like this:
// https://github.com/cyrilwanner/next-compose-plugins/issues/59#issuecomment-1192523231
// But the Solito creator says the fix is being worked on and doesn't advise any fix here:
// https://github.com/nandorojo/solito/issues/220#issuecomment-1304885796
module.exports = withPlugins(
  [
    withTM,
    withFonts,
    withImages,
    [
      withExpo,
      {
        projectRoot: __dirname + '../../..'
      }
    ]
  ],
  nextConfig
)
