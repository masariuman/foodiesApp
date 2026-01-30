const sql = require("better-sqlite3");
const db = sql("meals.db");

const dummyMeals = [
  {
    title: "Paster Enak",
    slug: "pastel-enak",
    image: "/images/pastel.png",
    summary: "Paste enak dengan isi yang mengenyangkan.",
    instructions: `
      1. Potong dadu wortel dan kentang.

      2. Tumis bawang putih hingga harum, kemudian masukan kentang dan wortel, tumis dan tambahkan garam secukupnya.

      3. Apabila sudah matang, masukan soun dan tuangkan campuran air dan tepung sedikit-sedikit.

      4. Masak hingga matang dan sisihkan.

      5. Untuk kulit Pastel. Lelehkan margarin dan tunggu hingga agak hangat/suhu ruang.

      6. Pada wadah yang cukup besar, campurkan semua bahan kering. Masukan margarin cair sedikit-sedikit sambil terus diaduk. Lalu bisa tambahkan 1 sendok minyak dan aduk kembali.

      7. Jika sudah tercampur. Masukan air sedikit-sedikit sambil diuleni dengan tangan hingga bahan tercampur dan sudah tidak menempel diwadah atau tangan.

      8. Adonan wajib di resting 15-30 menit. Sebelum di berikan isian.

      9. Setelah pastel diisi dan dibentuk. Goreng pastel menggunakan minyak panas namun api sedang hingga kuning keemasan.
    `,
    creator: "Arif Setiawan",
    creator_email: "arif_seiawan@masariuman.com",
  },
  {
    title: "Bakwan Udang",
    slug: "bakwan-udang",
    image: "/images/bakwan.png",
    summary: "Bakwan nikmat dengan topping udang diatasnya.",
    instructions: `
      1. Campurkan wortel yang sudah diserut korek api dan kol yang sudah diiris halus. Masukkan tepung serba guna aduk hingga tercampur rata.

      2. Beri air sedikit demi sedikit sampai semua tercampur. Masukkan telur aduk lagi. Terakhir masukkan udang. Aduk lagi, adonan bakwan siap dicetak dan masak.

      3. Panaskan minyak, tuang adonan ke sendok cetakan bakwan. Benamkan ke minyak. Bolak balik hingga kedua sisi coklat matang merata. Angkat dan tiriskan. Susun di piring saji bakwan udang enak sekali disajikan dengan cabe rawit. Bikiiiin nagih..
    `,
    creator: "MasariuMan",
    creator_email: "masariuman@masariuman.com",
  },
  {
    title: "Bakwan Jagung",
    slug: "bakwan-jagung",
    image: "/images/bakwanjagung.png",
    summary:
      "bakwan yang dibuat dengan jagung, dan agak berbeda hasilnya dari bakwan udang karena lebih tipis.",
    instructions: `
      1. Ulegh bumbu halusnya.

      2. Tambahkan jagung sisir, wortel serut, dan daun bawang, siapkan bahan lainnya juga.

      3. Campur bumbu halus, sayuran, tepung terigu, tepung beras, tepung tapioka dan baking powder jadi satu. Kemudian tmbahkan air sedikit demi sedikit, aduk hingga adonan kental.

      4. Panaskan minyak, ambil adonan dengan sendok, goreng hingga kuning keemasan. Tiriskan dan siap disajikan.
    `,
    creator: "The Arif",
    creator_email: "thearif@masariuman.com",
  },
  {
    title: "Donat Gula",
    slug: "donat-gula",
    image: "/images/donat.png",
    summary: "Donat yang manis dan mengenyangkan.",
    instructions: `
      1. Campur gula pasir, SP, dan air hangat, aduk hingga SP benar-benar larut.

      2. Masukkan terigu, fermipan, dan telur ke dalam campuran tadi, uleni hingga setengah kalis.

      3. Tambahkan margarin dan baking powder, uleni lagi sampai adonan kalis elastis.

      4. Diamkan adonan 30 menit hingga mengembang 2x lipat.

      5. Kempiskan adonan, bentuk bulat, lubangi tengahnya.

      6. Diamkan lagi 15 menit.

      7. Goreng donat dalam minyak panas sedang hingga kuning keemasan.

      8. Angkat, tiriskan, taburi gula donat saat masih hangat.
    `,
    creator: "Arif",
    creator_email: "arif@masariuman.com",
  },
  {
    title: "Pisang Goreng",
    slug: "pisang-goreng",
    image: "/images/pisang.png",
    summary: "Pisang goreng renyah manis penuh energi.",
    instructions: `
      1. Belah pisang dari dari ujung menuju bawah tapi tidak putus, buat 4 belahan.

      2. Pada wadah, tuang tepung trigu, maizena dan margarin. Tambahkan air sedikit - sedikit sampai adonan tidak terlalu encer tidak terlalu kental, cirinya jika dituang pakai sendok adonan jatuh seperti pita besar tidak putus-putus.

      3. Panaskan Minyak dan goreng pisang sampai kuning keemasan. Jangan di bolak balik ya, jika bagian bawah sudah agak menguning balik dan tunggu sampai matang, lalu angkat dan tiriskan.

      4. Pisang goreng kipas hangat dan secangkir teh siap menemani hari mu lebih berwarna.
    `,
    creator: "Setiawan",
    creator_email: "setiawan@masariuman.com",
  },
  {
    title: "Tahu Sumedang",
    slug: "tahu-sumedang",
    image: "/images/tahusumedang.png",
    summary: "Tahu Sumedang yang gurih dan nikmat serta enak dimulut.",
    instructions: `
      1. Siapkan tahu putih, serta bumbunya yaitu bawang putih, ketumbar bubuk, garam dan minyak goreng ROSE BRAND, baking powder dan baking soda. Tahu putih dipotong kotak2 sisihkan

      2. Siapkan bawang putih, ketumbar dan garam yg dihaluskan, lalu masukkan kedalam panci yg sdh diisi air. Didihkan. Setelah mendidih lalu matikan api kompor, masukkan baking powder dan baking soda aduk2 sebentar agar tercampur rata lalu tuangkan ke wadah yang berisi tahu. Tahu harus terendam air bumbu. Diamkan minim 1 jam agar bumbu meresap.

      3. Setelah bumbu meresap, siapkan minyak goreng ROSE BRAND, tuang di wajan dan goreng tahu hingga matang. Setelah matang, angkat, tiriskan.

      4. Tata di piring sajikan bersama cabe rawit atau sambal kecap
 `,
    creator: "Avatar",
    creator_email: "avatar@masariuman.com",
  },
  {
    title: "Risoles Mayones",
    slug: "risoles-mayones",
    image: "/images/risol.png",
    summary: "Risoles Mayones yang nikmat dan mengenyangkan.",
    instructions: `
      1. Masukan semua adonan bahan kulit aduk sampai tercampur, kemudian di saring agar hasilnya tidak menggrindil. diamkan selama 5 menit.
    
      2. Panaskan teplon anti lengket menggunakan api kecil, beri olesan margarin sedikit.kalau de rasa sudah agak hangat masukan adonan satu centong sayur yg sedang(tergantung teplon nya gede apa kecel ini ya).
    
      3. Suir suir ayam punjungan, parut telur rebus menggunakan parutan keju.
    
      4. Siapkan kulit risol satu persatu beri isian.

      5. Siapkan tepung roti dan terung cair sebagai perekat.

      6. Setelah semua de isi, masukan risol que adonan tepung basah, kemudian gulingkan que tepung panir.lakukan sambil de tekan agar merekat dg sempurna.

      7. Panaskan minyak, goreng dengan api sedang cenderung kecil.

      8. Risol isi ayam dan telur punjungan saus mayo siap de santap.
    `,
    creator: "Raja Risol",
    creator_email: "rajarisol@masariuman.com",
  },
  {
    title: "Tempe Mendoan",
    slug: "tempe-mendoan",
    image: "/images/tempe.png",
    summary: "Tempe Mendoan Besar dan Nikmat.",
    instructions: `
      1. Iris tempe tipis-tipis. Sisihkan.
    
      2. Campurkan terigu, maizena, tepung beras, dan baking powder. Aduk rata.
    
      3. Haluskan bawang putih dan ketumbar, lalu masukan ke dalam wadah tepung. Tambahkan kunyit bubuk dan garam.
    
      4. Masukan air sedikit demi sedikit, sambil di aduk rata. Konsistensi adonan tidak terlalu kental ataupun cair, hampir mirip seperti adonan rempeyek.

      5. Celupkan tempe ke adonan tepung, goreng ke dalam minyak yang sudah panas. Goreng sampai golden brown. Angkat dan sajikan.
    `,
    creator: "Tempe King",
    creator_email: "tempeking@masariuman.com",
  },
  {
    title: "Martabak Telur",
    slug: "martabak-telur",
    image: "/images/martabak.png",
    summary: "Martabak Telur yg Gemuk dan Mengenyangkan.",
    instructions: `
      1. Letakkan semua bahan isian (sosis, bwg pree, telor) dalam mangkok (kecuali kulit lompia), beri bumbu kari, garam, kaldu jamur & merica bubuk.. Setelah itu aduk pelan pelan sampai tercampur rata.
    
      2. Panaskan teflon.. Beri minyak goreng kurleb 5-6 sdk makan.. Krn ini konsepnya menggoreng.. Bukan memamggang.. Jd agk sedikit banyak minyaknya.
    
      3. Letakkan, susun kulit lompia menutupi teflon.. Utk lapisan bawah ini saya pakai 4 lembar.. Lalu tuang adonan isi.
    
      4. Agar tdk bocor.. Setelah tertutup lapisan atas boleh ditutup lagi dgn kulit lompia.

      5. Masak dgn api kecil cendenung sedang.. Agar tdk gosong.

      6. Masak dgn api kecil cendenung sedang.. Agar tdk gosong.

      7. Setelah 1 sisi matang.. Dibalik.. Agar sisi yg lainnya juga matang.. Pastikan adonan isi matang juga.. Agar mudah & tidak pecah.. Saya balik dengan bantuan 2 sutil.
      
      8. Masak sampai matang.. Tiriskan.. Letakkan dlm piring.. Lalu potong sesuai selera.. Sedap disajikan dgn pelengkap sesuai selera (agar, lombok atau saus sambal).
    `,
    creator: "Martabak Queen",
    creator_email: "martabakqueen@masariuman.com",
  },
  {
    title: "Telur Gulung",
    slug: "telur-gulung",
    image: "/images/telurgulung.png",
    summary: "Telur Gulung Jajaan Tradisional Yang MANTAP.",
    instructions: `
      1. Campur semua bahan didalam botol lalu dikocok2.
    
      2. Panaskan minyak (make sure benar2 panas).
    
      3. Kalo uda panas tinggal sebar adonan dalam botol diatas minyak panas, lalu ambil dengan menggunakan tusukan kayu.
    `,
    creator: "Raja Telor Gulung",
    creator_email: "rajatelorgulung@masariuman.com",
  },
  {
    title: "Pempek Palembang",
    slug: "pempek-palembang",
    image: "/images/pempek.png",
    summary: "Pempek Bukan dari Palembang, tapi Resep Palembang.",
    instructions: `
      1. Campur rata bahan biang sampai licin lalu masak dengan api kecil. Aduk terus sampai matang (kilap dan bau terigu hilang). Diamkan sampai hangat lalu masukkan 3butir telur aduk rata, kemudian tambahkan tapioka bertahap. Uleni sampai tidak lengket dan bisa dibentuk.
    
      2. Siapkan bahan isian telur, kocok jadi 1.
    
      3. Buat adonan pempek (25gr) lalu isi dengan telur, sisanya bisa dibuat pempek lenjer. Boleh banget pakai telur utuh tanpa kocok, tapi hati hati saat membuatnya, jangan sampai bocor. Tapi lama kelamaan akan terbiasa kok.. Dan rasanya mudah, serta lebih rapi dari yg difoto ini. Selagi membentuk pempek didihkan air tambah sedikit minyak goreng untuk merebus.
    
      4. Rebus pempek sampai mengapung. (Boleh langsung diolah kenjadi pempek goreng dengan kuah cuko atau sebagai stok cemilan di frozen).
    `,
    creator: "Pempek Lejen",
    creator_email: "pempeklejen@masariuman.com",
  },
  {
    title: "Pentol Goreng Banjarmasin",
    slug: "pentol-goreng-banjarmasin",
    image: "/images/pentolgoreng.png",
    summary: "Pentol Goreng Mekar dari Banjarmasin.",
    instructions: `
      1. Membuat Adonan: Campur tepung tapioka, terigu, bawang putih, daun bawang, garam, merica, dan penyedap rasa. Tambahkan daging/ikan giling, aduk rata.
    
      2. Uleni: Tuang air panas sedikit demi sedikit sambil diuleni hingga adonan bisa dibentuk (kaldu/cair).
    
      3. Bentuk & Rebus: Ambil satu sendok teh adonan, bentuk bulat. Rebus dalam air mendidih yang sudah diberi sedikit minyak agar tidak lengket. Rebus hingga mengapung, tanda sudah matang. Angkat dan tiriskan, dinginkan.
    
      4. Menggoreng: Panaskan minyak di teflon. Celupkan pentol rebus ke dalam kocokan telur, goreng hingga berwarna cokelat keemasan.

      5. Penyajian: Sajikan hangat dengan saus sambal pedas manis. 
    `,
    creator: "Pentol Banjar",
    creator_email: "pentolbanjar@masariuman.com",
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`,
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();
