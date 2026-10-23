// Shared by desktop, mobile, and footer navigation.
export const primaryNavigation = [
  { label: "NEWS", description: "お知らせ", to: "/news" },
  { label: "CONTENTS", description: "動画・配信", to: "/#videos" },
  { label: "PROFILE", description: "プロフィール", to: "/#profile" },
  { label: "GOODS", description: "公式グッズ", to: "/#goods" },
  { label: "GUIDELINE", description: "二次創作ガイドライン", to: "/guideline" },
  { label: "CONTACT", description: "お問い合わせ", to: "/contact" },
];

export const socialNavigation = [
  { label: "YouTube", href: "https://youtube.com/@skyfelis", icon: "fa-brands fa-youtube" },
  { label: "X (Twitter)", href: "https://x.com/skyfelis", icon: "fa-brands fa-x-twitter" },
];

export const footerNavigation = [
  { label: "Contents", links: primaryNavigation.slice(0, 4) },
  { label: "Links", links: [
    { label: "Blog", description: "ブログ", to: "https://blog.skyfelis.jp/" },
    { label: "GitHub", description: "ソースコード", to: "https://github.com/skyfelis" },
  ] },
  { label: "Support", links: [
    { label: "Guidance", description: "ご依頼について", to: "/#guidance" },
    ...primaryNavigation.slice(4),
  ] },
];
