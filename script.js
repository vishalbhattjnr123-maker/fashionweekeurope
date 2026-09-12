import fs from 'fs';
import sharp from 'sharp';

const files = fs.readdirSync('public/images').filter(f => f.match(/\.(jpg|jpeg|png|webp)$/i));

async function run() {
  const data = [];
  for (const f of files) {
    try {
      const meta = await sharp('public/images/' + f).metadata();
      data.push({ f: '/images/' + f, w: meta.width, h: meta.height, r: (meta.width / meta.height) });
    } catch (e) { }
  }

  // Sort descending by resolution (biggest images at start)
  const land = data.filter(d => d.r > 1.2).sort((a, b) => b.w * b.h - a.w * a.h);
  const port = data.filter(d => d.r < 0.85).sort((a, b) => b.w * b.h - a.w * a.h);
  const sq = data.filter(d => d.r >= 0.85 && d.r <= 1.2).sort((a, b) => b.w * b.h - a.w * a.h);

  const allImages = [...land, ...port, ...sq];

  // Pop Best images (since they are sorted with highest quality first, we shift from the front)
  const popL = () => { let v = land.shift() || sq.shift() || allImages.shift(); return v ? v.f : '/images/10404.jpg'; };
  const popP = () => { let v = port.shift() || sq.shift() || allImages.shift(); return v ? v.f : '/images/10627.jpg'; };
  const popS = () => { let v = sq.shift() || port.shift() || allImages.shift(); return v ? v.f : '/images/1141026.jpg'; };

  const images = {
    hero: popL(),
    aboutFashion: popP(),
    staggered1: popP(),
    staggered2: popP(),
    swiper1: popP(),
    swiper2: popP(),
    swiper3: popP(),
    background: popL(),
    strip: Array.from({ length: 5 }, () => popP()),
    cta: popP(),

    models: Array.from({ length: 12 }, () => popP()),
    fashionWeek: Array.from({ length: 6 }, () => popL()),
    portfolio: Array.from({ length: 12 }, () => popS()),
    casting: popL(),
    about: popP(),
    contact: popL(),
    projectDetails: Array.from({ length: 12 }, () => popS())
  };

  const js = `// Auto-generated intelligent image mapping
export const selectedImages = ${JSON.stringify(images, null, 2)};

export const models = [
  { id: 1, name: 'Elena Rostova', location: 'Paris', image: selectedImages.models[0] },
  { id: 2, name: 'Aiden Vance', location: 'London', image: selectedImages.models[1] },
  { id: 3, name: 'Chiara Rossi', location: 'Milan', image: selectedImages.models[2] },
  { id: 4, name: 'Marcus Sterling', location: 'New York', image: selectedImages.models[3] },
  { id: 5, name: 'Sofia Martinez', location: 'Madrid', image: selectedImages.models[4] },
  { id: 6, name: 'Lukas Weber', location: 'Berlin', image: selectedImages.models[5] },
  { id: 7, name: 'Emma Nielsen', location: 'Copenhagen', image: selectedImages.models[6] },
  { id: 8, name: 'Noah Evans', location: 'London', image: selectedImages.models[7] },
  { id: 9, name: 'Chloe Dubois', location: 'Paris', image: selectedImages.models[8] },
];

export const portfolio = [
  { id: 1, title: 'Summer Campaign', type: 'Editorial', image: selectedImages.portfolio[0] },
  { id: 2, title: 'Vogue Archive', type: 'Cover', image: selectedImages.portfolio[1] },
  { id: 3, title: 'Milan Week', type: 'Runway', image: selectedImages.portfolio[2] },
  { id: 4, title: 'Urban Fall', type: 'Campaign', image: selectedImages.portfolio[3] },
  { id: 5, title: 'Monochrome', type: 'Beauty', image: selectedImages.portfolio[4] },
  { id: 6, title: 'The New Wave', type: 'Editorial', image: selectedImages.portfolio[5] },
];

export const fashionWeeks = [
  { id: 1, city: 'Paris', date: 'Sep 25 - Oct 3', image: selectedImages.fashionWeek[0] },
  { id: 2, city: 'Milan', date: 'Sep 19 - 25', image: selectedImages.fashionWeek[1] },
  { id: 3, city: 'London', date: 'Sep 15 - 19', image: selectedImages.fashionWeek[2] },
];
`;

  fs.writeFileSync('src/data/mockData.js', js);
  console.log('done');
}
run();
