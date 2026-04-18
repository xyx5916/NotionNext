const CONFIG = {

  SIMPLE_LOGO_IMG: '/Logo.webp',
  SIMPLE_TOP_BAR: true, // 显示顶栏
  SIMPLE_TOP_BAR_CONTENT: process.env.NEXT_PUBLIC_THEME_SIMPLE_TOP_TIPS || '',
  SIMPLE_LOGO_DESCRIPTION: process.env.NEXT_PUBLIC_THEME_SIMPLE_LOGO_DESCRIPTION || '<div>网安爱好者<br/>/资深干饭人<br/>/知识分享博主</div>',

  SIMPLE_AUTHOR_LINK: process.env.NEXT_PUBLIC_AUTHOR_LINK || '#',

  SIMPLE_POST_AD_ENABLE: process.env.NEXT_PUBLIC_SIMPLE_POST_AD_ENABLE || false, // 文章列表是否插入广告

  SIMPLE_POST_COVER_ENABLE: process.env.NEXT_PUBLIC_SIMPLE_POST_COVER_ENABLE || false, // 是否展示博客封面

  SIMPLE_ARTICLE_RECOMMEND_POSTS: process.env.NEXT_PUBLIC_SIMPLE_ARTICLE_RECOMMEND_POSTS || true, // 文章详情底部显示推荐

  // 菜单配置
  SIMPLE_MENU_CATEGORY: true, // 显示分类
  SIMPLE_MENU_TAG: true, // 显示标签
  SIMPLE_MENU_ARCHIVE: true, // 显示归档
  SIMPLE_MENU_SEARCH: true // 显示搜索
}
<script>
// 创建音频对象
const audio = new Audio();

// 你的 MP3 直链（这里替换成你自己的）
audio.src = "https://raw.githubusercontent.com/xyx5916/audio-host/main/66765c5cdacc48af682833601b8eaaa9(1) - 副本.mp3";

// 自动循环
audio.loop = true;

// 自动播放（必须加 muted 才能过浏览器限制）
audio.muted = true;
audio.autoplay = true;

// 开始播放
audio.play().then(() => {
  // 播放成功后取消静音（马上出声）
  audio.muted = false;
}).catch(err => {
  console.log("浏览器限制，等待用户点击后播放");
  // 如果浏览器拦截，用户点一下页面就会播放
  document.addEventListener("click", () => {
    audio.play();
    audio.muted = false;
  }, { once: true });
});
</script>
export default CONFIG
