"use strict";
let galleryArray = [
  {
    heading: "Resume",
    keyword: "prebuild resume",
    title: "Novo Resume",
    content:
      "A website that helps you create a fast and professional-looking resume",
    link: "https://novoresume.com",

  },
  {
    heading: "Resume",
    title: "Flow CV",
    content: "A website that helps you create a modern and interactive resume",
    link: "https://www.flowcv.io/",
  },
  {
    heading: "Resume",
    title: "CV Resume",
    content:
      "A website that offers templates and tools to create a professional-looking resume",
    link: "https://cvresume.org/",
  },
  {
    heading: "Powerful Resources : PDF, Video, Image, Yotube to Pdf",
    title: "Tin Wow",
    content:
      "A website that helps you create a stunning resume and cover letter",
    link: "https://www.tinywow.com/",
  },
  {
    heading: "Powerful Resources : PDF, Video, Image, Yotube to Pdf",
    title: "Video Glancer",
    content: "A tool that allows you to create a video resume",
    link: "https://videoglancer.com/",
  },
  {
    heading: "Powerful Resources : PDF, Video, Image, Yotube to Pdf",
    title: "123 Apps",
    content: "A website that offers a variety of online tools and resources",
    link: "https://123apps.com/",
  },
  {
    heading: "Powerful Resources : PDF, Video, Image, Yotube to Pdf",
    title: "Screen Shot Guru",
    content: "A tool that allows you to capture and edit screenshots",
    link: "https://screenshotguru.com/",
  },
  {
    heading: "Powerful Resources : PDF, Video, Image, Yotube to Pdf",
    title: "Temp Mail",
    content: "A tool that allows you to create a temporary email address",
    link: "https://temp-mail.org/",
  },
  {
    heading: "Students Sections",
    title: "Teleport HQ",
    content: "A tool that helps you schedule and join online meetings",
    link: "https://teleporthq.com/",
  },
  {
    heading: "Students Sections",
    title: "Kashipara",
    content:
      "A website that offers free project ideas and resources for students",
    link: "https://kashipara.com/",
  },
  {
    heading: "Students Sections",
    title: "Netlify",
    content:
      "A platform that allows you to easily host your website and apps for free",
    link: "https://www.netlify.com",
  },
  {
    heading: "Students Sections",
    title: "Uizard",
    content: "A website that provides drag and drop templates for projects",
    link: "https://uizard.io",
  },
  {
    heading: "Students Sections",
    title: "Neon Projects",
    content: "A website that offers project work",
    link: "https://nevonpprojects.com",
  },
  {
    heading: "Students Sections",
    title: "Free for Students",
    content:
      "A community that provides free resources for students, including certificates",
    link: "https://freeforstudents.org",
  },
  {
    heading: "Free certificates",
    title: "My Great Learning",
    content: "A website that offers free certificates",
    link: "https://www.mygreatlearning.com/academy",
  },
  {
    heading: "Free certificates",
    title: "Class Central",
    content:
      "A website that offers a variety of free online courses and certificates",
    link: "https://www.classcentral.com",
  },
  {
    heading: "Instagram Tools",
    title: "Insta Video Save",
    content: "A tool that allows you to save Instagram videos",
    link: "https://instavideosave.net",
  },
  {
    heading: "Instagram Tools",
    title: "New Profile Pic",
    content: "A website that allows you to edit your profile picture",
    link: "https://newprofilepic.com",
  },
  {
    heading: "Instagram Tools",
    title: "Magic Eraser",
    content: "A tool that helps you remove unwanted elements from images",
    link: "https://magiceraser.io",
  },
  {
    heading: "Instagram Tools",
    title: "Canva",
    content: "A popular photo editor for social media",
    link: "https://www.canva.com",
  },
  {
    heading: "Logo Maker",
    title: "Hatchful Shopify",
    content: "A website that helps you create amazing logos",
    link: "https://hatchful.shopify.com",
  },
  {
    heading: "Logo Maker",
    title: "Tailor Brands",
    content: "A website that allows you to create logos",
    link: "https://www.tailorbrands.com",
  },
  {
    heading: "Logo Maker",
    title: "Looka",
    content: "A website that offers a range of customizable logos",
    link: "https://looka.com",
  },
  {
    heading: "Free Cloud Storage",
    title: "Tera Box",
    content: "A website that provides 1 TB of free storage",
    link: "https://www.terabox.com",
  },
  {
    heading: "File Sharing",
    title: "Toffeeshare",
    content: "A tool that allows you to share large files quickly",
    link: "https://toffeeshare.com",
  },
  {
    heading: "Photo Shop altranative",
    title: "Hotpot AI",
    content: "Design assistant for photos",
    link: "https://hotpot.ai",
  },

  {
    heading: "Photo Shop altranative",
    title: "Watermark Remover",
    content: "Remove watermarks from images",
    link: "https://www.watermarkremover.io/",
  },

  {
    heading: "Photo Shop altranative",
    title: "Deep Image",
    content: "Upscale images",
    link: "https://deep-image.ai/",
  },

  {
    heading: "Photo Shop altranative",
    title: "Deepart",
    content: "Create non-fungible tokens (NFTs)",
    link: "https://deepart.io/",
  },

  {
    heading: "Photo Shop altranative",
    title: "Colorise",
    content: "Photo editing and restoration services",
    link: "https://colorize.cc/",
  },

  {
    heading: "Photo Shop altranative",
    title: "123 Passport",
    content: "Create passport photos",
    link: "https://www.123passportphoto.com",
  },
  {
    heading: "Photo Shop altranative",
    title: "The Inpaint",
    content: "A tool that helps you remove unwanted elements from images",
    link: "https://theinpaint.com",
  },
  {
    heading: "Photo Shop altranative",
    title: "Media IO",
    content: "A website that offers photo and video editing services",
    link: "https://www.media.io/",
  },
  {
    heading: "Back ground remove",
    title: "Unscreen",
    content: "A tool that helps you remove the background from videos",
    link: "https://www.unscreen.com",
  },
  {
    heading: "Back ground remove",
    title: "Remove BG",
    content: "A tool that helps you remove the background from photos",
    link: "https://www.remove.bg",
  },
  {
    heading: "CSS Tools",
    title: "Get Waves",
    content: "A website that provides CSS source code",
    link: "https://getwaves.io",
  },
  {
    heading: "CSS Tools",
    title: "Keyframes",
    content: "A website that offers for amazing source code",
    link: "https://keyframes.app/",
  },
  {
    heading: "CSS Tools",
    title: "UIverse",
    content: "A website that  provides CSS source code",
    link: "https://uiverse.io/",
  },
  {
    heading: "CSS Tools",
    title: "Bg Jar",
    content: "Website that offers background images",
    link: "https://bgjar.com/",
  },
  {
    heading: "CSS Tools",
    title: "My Color Space",
    content: "Website that helps you create gradient colors",
    link: "https://mycolor.space/",
  },
  {
    heading: "CSS Tools",
    title: "Neumorphism CSS",
    content: "Website that provides CSS boxes",
    link: "https://hype4.academy/tools/neumorphism-generator",
  },
  {
    heading: "CSS Tools",
    title: "0 to 255",
    content: "Website that allows you to pick colors",
    link: "https://0to255.com/",
  },
  {
    heading: "Icons",
    title: "Craftwork Design",
    content: "Website that helps you design better websites",
    link: "https://craftwork.design/",
  },
  {
    heading: "Icons",
    title: "Khushmeen",
    content: "Website that offers free illustrations and doodle icons",
    link: "https://khushmeen.com/",
  },
  {
    heading: "Icons",
    title: "Icon Bay",
    content: "Website that offers a variety of cool icons",
    link: "https://iconbay.io/",
  },
  {
    heading: "Typing Practice",
    title: "10 Fast Fingers",
    content: "Website that offers typing games",
    link: "https://10fastfingers.com/",
  },
  {
    heading: "Typing Practice",
    title: "Keybr",
    content: "A website that helps you improve your typing skills",
    link: "https://www.keybr.com/",
  },
  {
    heading: "Typing Practice",
    title: " Typing Club",
    content: " A website that provides typing lessons and practice exercises",
    link: "https://www.typingclub.com/",
  },
  {
    heading: "Typing Practice",
    title: "Typing Test",
    content: "A website that provides typing lessons and practice exercises",
    link: "https://www.typingtest.com/",
  },
  {
    heading: "Typing Practice",
    title: "Z Type",
    content: "A website that provides typing games and practice exercises",
    link: "https://ztype.com/",
  },
];
