const SIMPLE_CONFIG = {
  SIMPLE_LOGO_IMG: '/Logo.webp',
  SIMPLE_TOP_BAR: true,
  SIMPLE_TOP_BAR_CONTENT: process.env.NEXT_PUBLIC_THEME_SIMPLE_TOP_TIPS || '',
  SIMPLE_LOGO_DESCRIPTION:
    process.env.NEXT_PUBLIC_THEME_SIMPLE_LOGO_DESCRIPTION ||
    '<div>网安爱好者<br/>/资深干饭人<br/>/知识分享博主</div>',
  SIMPLE_AUTHOR_LINK: process.env.NEXT_PUBLIC_AUTHOR_LINK || '#',
  SIMPLE_POST_AD_ENABLE: process.env.NEXT_PUBLIC_SIMPLE_POST_AD_ENABLE || false,
  SIMPLE_POST_COVER_ENABLE: process.env.NEXT_PUBLIC_SIMPLE_POST_COVER_ENABLE || false,
  SIMPLE_ARTICLE_RECOMMEND_POSTS:
    process.env.NEXT_PUBLIC_SIMPLE_ARTICLE_RECOMMEND_POSTS || true,
  SIMPLE_MENU_CATEGORY: true,
  SIMPLE_MENU_TAG: true,
  SIMPLE_MENU_ARCHIVE: true,
  SIMPLE_MENU_SEARCH: true,
}

const MUSIC = {
  ENABLED: true,
  URL: 'https://raw.githubusercontent.com/xyx5916/audio-host/main/66765c5cdacc48af682833601b8eaaa9(1) - 副本.mp3',
  AUTO_PLAY: true,
  LOOP: true,
  VOLUME: 0.3,
}

const CONFIG = {
  ...SIMPLE_CONFIG,
  MUSIC,
}

export default CONFIG
export { CONFIG, MUSIC }
