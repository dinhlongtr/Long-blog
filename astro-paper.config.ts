import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://trandinhlong.id.vn/",
    title: "Trần Đình Long",
    description: "Đây là trang chuyên về mật thư",
    author: "Trần Đình Long",
    profile: "https://github.com/dinhlongtr/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Bangkok",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/dinhlongtr/Long-blog/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/dinhlongtr/" },
    { name: "x",        url: "https://x.com/dinhlongtr" },
    { name: "mail",     url: "mailto:dinhlongtr.hcmcyu@gmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/dinhlongtr/" },
    { name: "x",        url: "https://x.com/dinhlongtr/" },
    { name: "telegram", url: "https://t.me/ho_minhkhanh" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:dinhlongtr.hcmcyu@gmail.com" },
  ],
});
