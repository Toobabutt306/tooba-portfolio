// =====================================================================
//  ALL SITE CONTENT LIVES HERE. Personal info comes from Tooba's CV.
//  To swap media: just replace the file with the same name inside
//  /public/assets/... (or change the file name below).
// =====================================================================

export const profile = {
  name: 'Tooba Butt',
  title: 'AI Prompt Engineer | AI Video Creator | UGC Content Creator',
  footerTitle: 'AI Prompt Engineer | AI Video Creator | Creative Content Specialist',
  tagline: 'I transform creative ideas into AI-powered videos, visuals, advertisements and digital experiences.',
  email: 'toobabutt306@gmail.com',
  phone: '+92 320 8788966',
  github: 'https://github.com/Toobabutt306',
  linkedin: '', // not in CV. Paste your LinkedIn URL here and it will appear automatically.
  location: 'Lahore, Pakistan',
  cv: '/assets/cv/Tooba_Butt_videoCreator_CV.pdf',
}

export const nav = [
  ['Home', '#home'], ['About', '#about'], ['Services', '#services'], ['Work', '#work'],
  ['AI Tools', '#tools'], ['Process', '#process'], ['Contact', '#contact'],
]

export const about = {
  text: [
    'Creative AI Prompt Engineer and content creator with hands-on experience in AI-generated video, image generation, UGC advertisements, promotional content, construction and architectural visualization, kids’ content, branding and digital marketing.',
    'I develop detailed prompts for AI image and video tools, produce cinematic visual content, and edit short-form videos for social media and marketing campaigns.',
  ],
  chips: ['AI Prompt Engineering', 'AI Video Generation', 'AI Image Generation', 'UGC Ads', 'Visual Storytelling', 'Creative Content'],
  education: {
    degree: 'BS Software Engineering',
    school: 'Lahore Garrison University, Lahore, Pakistan',
    detail: '2026 – Present · 7th Semester · CGPA 3.6',
  },
}

export const services = [
  { icon: 'video', title: 'AI Video Creation', text: 'Realistic, cinematic and promotional AI-generated videos.' },
  { icon: 'mic', title: 'UGC Ads', text: 'AI-generated UGC-style product and brand advertisements.' },
  { icon: 'megaphone', title: 'Promotional Videos', text: 'Marketing and promotional content for brands and businesses.' },
  { icon: 'building', title: 'Construction & Architectural Videos', text: 'AI-generated construction, architecture and property visualization content.' },
  { icon: 'image', title: 'AI Image Generation', text: 'Creative AI-generated images, products, characters and environments.' },
  { icon: 'smile', title: 'Kids Content', text: 'Cartoon, storytelling and entertainment content for children.' },
  { icon: 'palette', title: 'Brand Kits & Brochures', text: 'Professional brand identity materials, brochures and marketing designs.' },
  { icon: 'code', title: 'Prompt Engineering', text: 'Detailed prompts for generating controlled and consistent AI visuals.' },
]

// ---------- VIDEOS ----------  file = name inside /public/assets/videos/
// The poster (thumbnail) is the same file name with .webp, e.g. video-01.webp
export const videos = [
  { file: 'video-01.mp4', category: 'UGC Ads', title: 'Product Ad Concept', text: 'Short-form AI UGC product advertisement.' },
  { file: 'video-02.mp4', category: 'Promotional', title: 'Brand Promo Reel', text: 'Marketing visuals for a brand campaign.' },
  { file: 'video-03.mp4', category: 'Construction', title: 'Building Walkthrough', text: 'Cinematic architectural visualization.' },
  { file: 'video-04.mp4', category: 'Cinematic', title: 'Cinematic Scene', text: 'Scene design with controlled camera movement.' },
  { file: 'video-05.mp4', category: 'Kids Content', title: 'Cartoon Story Short', text: 'AI cartoon characters in a short story.' },
  { file: 'video-06.mp4', category: 'Experimental', title: 'Experimental Motion', text: 'Exploring new AI video styles.' },
]
export const videoCategories = ['All', 'UGC Ads', 'Promotional', 'Construction', 'Cinematic', 'Kids Content', 'Experimental']

export const ugc = {
  cta: 'Need an AI-powered ad? Let’s create it.',
  items: [
    { file: 'ugc-01.mp4', category: 'Product Advertisement', title: 'Product Advertisement', text: 'Product-focused ad with AI characters and visuals.' },
    { file: 'ugc-02.mp4', category: 'AI Presenter', title: 'AI Presenter Video', text: 'Script-led presenter with voiceover.' },
    { file: 'ugc-03.mp4', category: 'Product Demo', title: 'Product Demonstration', text: 'Clear, benefit-first product demonstration.' },
    { file: 'ugc-04.mp4', category: 'Social Ad', title: 'Social Media & Short-Form Ad', text: 'Vertical-friendly promo for Reels and Shorts.' },
  ],
}

export const construction = [
  { file: 'video-03.mp4', category: 'Building Visualization', title: 'Building Visualization', text: 'Realistic building concepts and environments.' },
  { file: 'construction-02.mp4', category: 'Construction Progress', title: 'Construction Progress Concepts', text: 'Stage-by-stage construction storytelling.' },
  { file: 'construction-03.mp4', category: 'Architectural Environments', title: 'Architectural Environments', text: 'Spaces, interiors and surroundings.' },
  { file: 'construction-04.mp4', category: 'Property Promo', title: 'Property Promotional Visuals', text: 'Cinematic shots for property marketing.' },
]

// ---------- IMAGES ----------  file = name inside /public/assets/images/
export const images = [
  { file: 'image-01.webp', category: 'AI Characters', title: 'Character Study' },
  { file: 'image-02.webp', category: 'Products', title: 'Product Visual' },
  { file: 'image-03.webp', category: 'Cinematic', title: 'Cinematic Frame' },
  { file: 'image-04.webp', category: 'Architecture', title: 'Architectural Concept' },
  { file: 'image-05.webp', category: 'Creative Concepts', title: 'Concept Art' },
  { file: 'image-06.webp', category: 'Kids Content', title: 'Kids Scene' },
  { file: 'image-07.webp', category: 'AI Characters', title: 'Character Portrait' },
  { file: 'image-08.webp', category: 'Products', title: 'Brand Product Shot' },
]
export const imageCategories = ['All', 'AI Characters', 'Products', 'Cinematic', 'Architecture', 'Creative Concepts', 'Kids Content']

export const kids = {
  concepts: ['Cartoon characters', 'Funny stories', 'Educational concepts', 'AI-generated scenes', 'YouTube Shorts concepts'],
  images: [
    { file: 'kids-01.webp', title: 'Cartoon Character' },
    { file: 'kids-02.webp', title: 'Story Scene' },
    { file: 'kids-03.webp', title: 'Educational Concept' },
    { file: 'kids-04.webp', title: 'Fun Environment' },
  ],
  videos: [
    { file: 'kids-video-01.mp4', category: 'Shorts Concept', title: 'Shorts Concept', text: 'Short-form video concept for children.' },
    { file: 'kids-video-02.mp4', category: 'Story', title: 'Cartoon Story', text: 'AI characters, environments and dialogue.' },
  ],
}

// ---------- BRANDING ----------  file = name inside /public/assets/branding/
export const branding = [
  { file: 'brand-01.jpg', title: 'Brand Kit' },
  { file: 'brand-02.jpg', title: 'Logo' },
  { file: 'brand-03.jpg', title: 'Color Palette' },
  { file: 'brand-04.jpg', title: 'Typography' },
  { file: 'brand-05.jpg', title: 'Brochure' },
  { file: 'brand-06.jpg', title: 'Social Media Post' },
  { file: 'brand-07.jpg', title: 'Promotional Graphic' },
  { file: 'brand-08.jpg', title: 'Marketing Creative' },
]

export const promptFlow = [
  { step: 'Creative Brief', text: 'Define the goal, audience, mood and format.' },
  { step: 'Detailed Prompt', text: 'Structure subject, scene, lighting, camera and style.' },
  { step: 'AI Generation', text: 'Generate images or video with the right tool.' },
  { step: 'Refinement', text: 'Iterate for consistency, motion and detail.' },
  { step: 'Final Content', text: 'Export a polished, ready-to-use visual.' },
]
export const promptExample = {
  brief: 'A 6-second product reveal for a skincare bottle, calm and luxurious.',
  prompt:
    'Macro cinematic shot of a frosted glass skincare bottle on wet black stone, soft rim lighting, slow dolly-in, shallow depth of field, gentle water droplets, premium commercial look, 4K, consistent product shape.',
  note: 'Illustrative example of my prompt workflow, not a client project.',
}
export const promptSkills = [
  'Text-to-Image Prompting', 'Text-to-Video Prompting', 'Image-to-Video Prompting', 'Character Consistency',
  'Scene Design', 'Camera Movement', 'Lighting', 'Cinematic Composition', 'Storytelling', 'AI Storyboarding',
]

// Tools are taken from the CV only.
export const tools = [
  { group: 'AI Video', items: ['Google Flow', 'Google Veo', 'Google Vids', 'Kling AI', 'Pika', 'Qwen'] },
  { group: 'AI Image', items: ['Leonardo AI', 'Midjourney', 'ChatGPT'] },
  { group: 'AI Voice & UGC', items: ['ElevenLabs', 'Narakeets'] },
  { group: 'Design', items: ['Canva', 'Gemini'] },
  { group: 'Editing', items: ['CapCut', 'Filmora', 'CreateStudio 3'] },
  { group: 'AI Assistants', items: ['Claude', 'Gemini'] },
]

export const process = [
  { n: '01', title: 'Idea', text: 'Understand the concept and objective.' },
  { n: '02', title: 'Prompt', text: 'Develop detailed AI prompts.' },
  { n: '03', title: 'Generate', text: 'Create images, scenes and videos.' },
  { n: '04', title: 'Refine', text: 'Improve consistency, visuals, motion and storytelling.' },
  { n: '05', title: 'Edit', text: 'Polish the final content using editing tools.' },
  { n: '06', title: 'Deliver', text: 'Prepare content for social media, advertising or promotional use.' },
]

// Projects: from the CV only. `thumb` is a file in /public/assets/videos or /images.
export const projects = [
  {
    title: 'AI Construction & Architectural Video Content',
    category: 'Construction',
    text: 'AI-generated construction and architectural promotional videos using Google Flow and AI video generation tools. Structured prompts for realistic buildings, environments, camera movements and cinematic storytelling.',
    tools: ['Google Flow'],
    thumb: '/assets/videos/construction-01.webp',
    link: '#construction',
  },
  {
    title: 'AI UGC & Promotional Content',
    category: 'UGC Ads',
    text: 'UGC-style advertisements and promotional videos using AI characters, product visuals, scripts and voiceovers, with prompts tailored for diverse audiences.',
    tools: [],
    thumb: '/assets/videos/ugc-01.webp',
    link: '#ugc',
  },
  {
    title: 'AI Kids Content',
    category: 'Kids Content',
    text: 'Kids’ entertainment content with AI cartoon characters, stories, environments and dialogue, plus short-form video concepts for social platforms.',
    tools: [],
    thumb: '/assets/images/kids-01.webp',
    link: '#kids',
  },
  {
    title: 'AI Visual Content & Image Generation',
    category: 'AI Visuals',
    text: 'AI images for products, brands, characters, environments and promotional campaigns, with consistent visuals across social media content.',
    tools: [],
    thumb: '/assets/images/image-03.webp',
    link: '#visuals',
  },
  {
    title: 'Brand Kit & Marketing Design',
    category: 'Branding',
    text: 'Brand kits, brochures, promotional graphics and social media materials, keeping visual branding consistent across campaign creatives.',
    tools: ['Canva', 'Gemini'],
    thumb: '/assets/branding/brand-01.jpg',
    link: '#branding',
  },
]
