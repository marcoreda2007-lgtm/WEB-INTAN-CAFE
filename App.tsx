import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Coffee, MapPin, Clock, Instagram, Facebook, Menu, X, ChevronRight, Phone } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Visit Us', href: '#visit' },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-cafe-bg)] text-[var(--color-cafe-text)] font-sans selection:bg-[var(--color-cafe-accent)] selection:text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-[var(--color-cafe-bg)]/95 backdrop-blur-md shadow-sm py-4' : 'bg-gradient-to-b from-black/50 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#home" className={`text-2xl font-serif font-bold tracking-wide transition-colors ${isScrolled ? 'text-[var(--color-cafe-text)]' : 'text-white'}`}>
            Intan Cafe
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[var(--color-cafe-accent)] ${isScrolled ? 'text-[var(--color-cafe-text)]' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#visit"
              className="bg-[var(--color-cafe-accent)] hover:bg-[var(--color-cafe-accent-hover)] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm"
            >
              Order Ahead
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden transition-colors ${isScrolled ? 'text-[var(--color-cafe-text)]' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-[var(--color-cafe-bg)] border-t border-[var(--color-cafe-border)] shadow-lg py-4 px-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium py-2 border-b border-[var(--color-cafe-border)]/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczPJ-iKoRulKXuck7eN4lxlnD3Y9SX68UnMUbvXy3UtF8Cgw__z68Vk2f7Got-yV6Qku-KCd9aKdstE4t3V8u3IHdpomoKYlvXEUsjHbI97vv8d60fLzSHhuzQB4Y78F4NTgtnTkdOSUsGLL3nt9XpIr=w1294-h970-s-no-gm?authuser=0"
            alt="Cozy cafe interior"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight"
          >
            Sudut nyaman Anda <br className="hidden md:block" /> di kota ini.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light"
          >
            Rasakan kehangatan rumah dengan kopi artisan kami, kue-kue yang baru dipanggang, dan suasana ramah yang dirancang untuk bersantai.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#menu"
              className="bg-[var(--color-cafe-accent)] hover:bg-[var(--color-cafe-accent-hover)] text-white px-8 py-4 rounded-full text-base font-medium transition-colors w-full sm:w-auto text-center"
            >
              Jelajahi Menu Kami
            </a>
            <a
              href="#visit"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-base font-medium transition-colors w-full sm:w-auto text-center"
            >
              Temukan Kami
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1975&auto=format&fit=crop"
                alt="Barista pouring coffee"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[var(--color-cafe-accent)] rounded-full -z-10 hidden md:block"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-[var(--color-cafe-border)] rounded-full -z-10 hidden md:block"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-[var(--color-cafe-accent)] mb-3">Cerita Kami</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Diseduh dengan cinta, disajikan dengan kehangatan.</h3>
            <div className="space-y-4 text-[var(--color-cafe-muted)] text-lg leading-relaxed">
              <p>
                Intan Cafe bermula dari ide sederhana: menciptakan ruang yang terasa seperti perpanjangan dari ruang tamu Anda sendiri. Tempat di mana aroma biji kopi yang baru dipanggang berpadu dengan dengungan percakapan yang tenang dan lembaran buku yang dibalik.
              </p>
              <p>
                Kami mendapatkan biji kopi dari pertanian berkelanjutan dan memanggangnya secara lokal untuk memastikan setiap cangkir sesegar mungkin. Kue-kue kami dipanggang sendiri setiap pagi, menggunakan resep yang diwariskan secara turun-temurun.
              </p>
              <p>
                Baik Anda di sini untuk bekerja, berkumpul dengan teman lama, atau sekadar menikmati momen tenang untuk diri sendiri, Anda selalu disambut hangat di Intan.
              </p>
            </div>
            
            <div className="mt-10 flex items-center gap-4">
              <div>
                <p className="font-serif font-bold text-xl">Umar Hadi</p>
                <p className="text-[var(--color-cafe-muted)] text-sm">Pemilik</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Menu */}
      <section id="menu" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-sm font-bold tracking-widest uppercase text-[var(--color-cafe-accent)] mb-3"
            >
              Favorit Kami
            </motion.h2>
            <motion.h3 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-4xl md:text-5xl font-serif"
            >
              Cita rasa rumah
            </motion.h3>
          </div>

          <div className="space-y-20">
            {[
              {
                title: "Main Course",
                items: [
                  {
                    name: "Mie Tek Tek Kuah",
                    desc: "Semangkuk mi rebus tradisional yang menenangkan dalam kaldu gurih yang kaya rasa, disajikan dengan sayuran dan telur.",
                    price: "$5.00",
                    img: "https://lh3.googleusercontent.com/pw/AP1GczOJD5vU3DjnVRbpUJtZs7lfWZcYnbvMpAcdVFCP0eNzh-JnG05WsTCkt0r5Ye9XVvufMwhwQJACW3GI9kasc63lGRjOLseoEDFEnCOkJNlfz31G87A0gYrSA_XGZNR3rtNI5Tj0eRhrvooHqsrFay8H=w728-h970-s-no-gm?authuser=0"
                  },
                  {
                    name: "Nasi Chicken Teriyaki",
                    desc: "Potongan ayam lembut yang dilumuri saus teriyaki manis dan gurih, disajikan di atas nasi hangat.",
                    price: "$6.50",
                    img: "https://lh3.googleusercontent.com/pw/AP1GczN8Pgc9nApg6HQqKX_L1KqqHr1xIjbXksZLnivKgw-PkTjJiWvOjmZ0DQKetRyrAqkiaFPG4B_aPC9Ms27oPkLjDaw8wPnN3NREWJaiV6_sztu8TGwkIs1A3NGLSloxvxGLivGTWhS8oV1_jsUH3bZn=w1294-h970-s-no-gm?authuser=0"
                  },
                  {
                    name: "Nasi Goreng Kampung",
                    desc: "Nasi goreng kampung otentik dengan perpaduan bumbu yang pas, disajikan dengan telur mata sapi.",
                    price: "$5.50",
                    img: "https://lh3.googleusercontent.com/pw/AP1GczMTJPrC8znYMb_qC4LqVTRzIFggpjB26WA9ijnJdebeckvJpBmD6kMng5Mrgj9_67IxTl2DN3DGCl_LFb52xpfRXzD5d9oGT0ZMNbwgwsQ1fDZ-U-bt4lelRMEgVp6Zp_cTdH2Ldb_roG4cJQX90KNz=w728-h970-s-no-gm?authuser=0"
                  },
                  {
                    name: "Nasi Paket Ayam",
                    desc: "Hidangan lengkap dengan ayam yang dimasak sempurna, nasi putih hangat, dan sambal segar.",
                    price: "$6.00",
                    img: "https://lh3.googleusercontent.com/pw/AP1GczM2hp_QyUvev2uMybMm7tA8stPdqViQ5YR5DciPlrq3myWJDZFwJrXWO1wNa2FfKJTmhbBj5t6VyoPZBZu8AjekAHiqXR_v53uSWOcfQ1Ip89iG0mXoFwklGDjNYI3kDl53Mh8Ny06X8q6kIpEozr4o=w728-h970-s-no-gm?authuser=0"
                  }
                ]
              },
              {
                title: "Drinks",
                items: [
                  {
                    name: "Mojito Mint",
                    desc: "Perpaduan menyegarkan dari daun mint segar, perasan jeruk nipis, dan air soda untuk rasa yang dingin dan menyegarkan.",
                    price: "$4.00",
                    img: "https://lh3.googleusercontent.com/pw/AP1GczMTeugnhRaeE0e26TL_xmMtOozcSHGj8nL5AWxVe4HACMlCTu2cetjIVS3z0GeQzKEoE060zGAN-ZSvJpqUFJ-8SJzlnh45M84vlwBUCCkx9LlT5pUKs4CyT50Cb3i6HTU4bZxQzQ7nEcR4mBjxKzam=w728-h970-s-no-gm?authuser=0"
                  },
                  {
                    name: "Ice Kuwut",
                    desc: "Minuman tradisional Bali yang terbuat dari melon segar, kelapa, dan sentuhan jeruk nipis untuk kesegaran tropis.",
                    price: "$3.50",
                    img: "https://lh3.googleusercontent.com/pw/AP1GczN14h_2rGrcHhrWbj1QER0dRjVTb-ZcKBnBpqzgTVtRoU1DBbBH7abEG6mOcJJplDJdSSaAyCW0J5kcixDUCkr5f8hMR7y_iwcPc0cxcywOmz1c5XiQI9R5bLf7VU3_2DpaE9PhPWNUc4ayZMplDN5f=w728-h970-s-no-gm?authuser=0"
                  },
                  {
                    name: "Coffee Latte",
                    desc: "Espresso kaya rasa yang dipadukan dengan susu kukus yang lembut dan lapisan busa tipis di atasnya.",
                    price: "$4.50",
                    img: "https://lh3.googleusercontent.com/pw/AP1GczNN9W5VS7yzKB53iWr_RZVjibLK9nFLSeppSAhGCx8q7P_xyp6w-ubrja5gISF5u06ZbSb0XbZqSGGBVGAlZljWYgtkvEhD4dRqMoPk1GzRA5OakLcu_Iw5dnyjYa5soisM0R1QYiRYj5-DCQ9XKk_7=w728-h970-s-no-gm?authuser=0"
                  },
                  {
                    name: "Tea",
                    desc: "Teh seduh klasik, disajikan panas atau dingin, cocok untuk sore yang santai.",
                    price: "$3.00",
                    img: "https://lh3.googleusercontent.com/pw/AP1GczPLH1VhhH4JwZ3d6Uvqk81wRRmwZiQrT1Gvj-y4nMEr5eRph5BwvhLKaE-UyrnBCI0--m2A5z7kRDg_yhcrEWg6a5Dj8CyfsccwCGIZYgxRd2f0sNoTY5AJlmOQaBi8ma9y7ctjTstCxdwt4BunAfvN=w728-h970-s-no-gm?authuser=0"
                  }
                ]
              },
              {
                title: "Snacks",
                items: [
                  {
                    name: "Sayap Ayam",
                    desc: "Sayap ayam goreng yang dibumbui dengan lezat, disajikan dengan hiasan segar di sampingnya.",
                    price: "$5.50",
                    img: "https://lh3.googleusercontent.com/pw/AP1GczMzn5X7jCJ437RHqikvJztrEL9YWfNUwMsxVu2lxkegGUJgmcDGz3XC3gFd9T4mY9ppVZaEwQkvWnZnwheNYL1s4Lir0NAwo6hUhRxUhigoVyW8ZQtkoCRVh_vgeadEhrnsamIOZkIHXqEcDXIJhsAQ=w728-h970-s-no-gm?authuser=0"
                  },
                  {
                    name: "Pisang Goreng Keju",
                    desc: "Pisang goreng manis yang ditaburi keju parut melimpah dan siraman karamel.",
                    price: "$4.00",
                    img: "https://lh3.googleusercontent.com/pw/AP1GczO1SUey_0p9D4xy9ul4hxoRAhuxgQl4DU_jrsaR83n43Yeaxw5JOpNi3NQmKXv9wBblWjuOY64fP1AHUaE340penzxkojK8y7PG1wBtu8D330oKVIRMZmlgTW4SGxWhor6hl56AlyQmiztm-ws5hPww=w728-h970-s-no-gm?authuser=0"
                  },
                  {
                    name: "Singkong Goreng",
                    desc: "Potongan singkong goreng renyah, dibumbui sempurna untuk rasa gurih yang nikmat.",
                    price: "$3.50",
                    img: "https://lh3.googleusercontent.com/pw/AP1GczMGP3gHV00HRXyoOaDlra52DbGYld6__9A6RA_AW98MdzeiMGbZLhbqNazX1SmyIygGSzAYy93hWDcug-aBs6gxxFqdgDs7_cAZAeUd4IFCvWHV0XzxXwmOL5_R-gbsTWQuBzMdLZtjVicfvrVHkVrL=w728-h970-s-no-gm?authuser=0"
                  },
                  {
                    name: "Tempe Mendoan",
                    desc: "Tempe iris tipis tradisional, dibalut tepung dan digoreng setengah matang, disajikan dengan sambal kecap pedas.",
                    price: "$3.50",
                    img: "https://lh3.googleusercontent.com/pw/AP1GczN94uE_WleusDMfe4x1Fq9a4-vtyC2HcdtfFluX6oH0r3PA2Z56mOfguQJUkKZDgBp-mzDs8U197G3IiCBS7CqKFcgrjdDZrvThZAK6A7-AUEE1wQLSfvWDgVo2dFTC4oRat2RdunEQzYkptPE5mNma=w728-h970-s-no-gm?authuser=0"
                  }
                ]
              }
            ].map((category, catIdx) => (
              <div key={catIdx}>
                <motion.h4 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl font-serif font-bold mb-8 border-b border-[var(--color-cafe-border)] pb-4"
                >
                  {category.title}
                </motion.h4>
                <motion.div 
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                  {category.items.map((item, i) => (
                    <motion.div key={i} variants={fadeIn} className="group cursor-pointer">
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                        <img 
                          src={item.img} 
                          alt={item.name} 
                          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-serif font-bold">{item.name}</h4>
                        <span className="text-[var(--color-cafe-accent)] font-medium">{item.price}</span>
                      </div>
                      <p className="text-[var(--color-cafe-muted)] text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>

          <div className="mt-24 flex flex-col items-center justify-center text-center bg-[var(--color-cafe-bg-alt)] p-10 rounded-3xl max-w-2xl mx-auto border border-[var(--color-cafe-border)]">
            <h4 className="text-2xl font-serif font-bold mb-4">Lihat Menu Lengkap Kami</h4>
            <p className="text-[var(--color-cafe-muted)] mb-8 max-w-md">
              Pindai kode QR di bawah ini dengan kamera ponsel Anda untuk melihat pilihan lengkap makanan, minuman, dan menu spesial musiman kami.
            </p>
            <div className="bg-white p-4 rounded-2xl shadow-sm mb-6 inline-block">
              {/* Placeholder QR code - will be replaced when user provides link or uploads image */}
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://example.com/menu" 
                alt="Menu QR Code" 
                className="w-40 h-40 object-contain"
              />
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-[var(--color-cafe-text)] font-medium hover:text-[var(--color-cafe-accent)] transition-colors group">
              Atau klik di sini untuk melihat secara online
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Vibe / Gallery */}
      <section id="gallery" className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        >
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase text-[var(--color-cafe-accent)] mb-3">Suasana</h2>
            <h3 className="text-4xl md:text-5xl font-serif">Ruang tamu kedua Anda</h3>
          </div>
          <a href="#" className="flex items-center gap-2 text-[var(--color-cafe-muted)] hover:text-[var(--color-cafe-accent)] transition-colors">
            <Instagram className="w-5 h-5" />
            <span>@intancafe</span>
          </a>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]"
        >
          <motion.div variants={fadeIn} className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
            <img src="https://lh3.googleusercontent.com/pw/AP1GczOgp5e1hZSLJ1eKhv3j7u_9ddCOZU9SJlQXLXChPg1091ZInHVXPLdXQtjWmIE8GLHEEhICgvKbBXopJtC3o9xFB2GSCzh0tRD77m_iMq2f2EVIZkAr2s0TYhH6YOrIBQCgJo_bvYjtdL4SpY4IJSR6=w728-h970-s-no-gm?authuser=0" alt="Cafe interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </motion.div>
          <motion.div variants={fadeIn} className="rounded-2xl overflow-hidden col-span-2">
            <img src="https://lh3.googleusercontent.com/pw/AP1GczO65ckcbpqyrE7T0KpxTq1hStlge15TxWalsIiK1H4C6Hy6SXuqfxiV-ASONFKXq88Ks-mYCl1a0t5JCDiL0ETMhPZbXSOgV4cQHmo5Pt0KD3GAIALQc_WcPqp2KugDFA9gdL2xkmQZljE5YkGQdqQI=w737-h896-s-no-gm?authuser=0" alt="Coffee cup" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </motion.div>
          <motion.div variants={fadeIn} className="col-span-2 rounded-2xl overflow-hidden">
            <img src="https://lh3.googleusercontent.com/pw/AP1GczMmvgEsWRrIHI-f3U_bHACjSpwBEv5ZBw4061x7lmWLS6pO6xOw0KGPj-tt0b8HTWJ6HiL4i-mAwqSpR812VuuCO5m_iFeFehYU7_XbQZ7X-gHRmHO3oEQ4_69C8DuzR1GULMHO_qhl6VraVLxTPXvM=w871-h919-s-no-gm?authuser=0" alt="People chatting" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-[var(--color-cafe-accent)]/10 overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <Coffee className="w-10 h-10 text-[var(--color-cafe-accent)] mx-auto mb-8 opacity-50" />
          <h3 className="text-2xl md:text-4xl font-serif leading-relaxed mb-8">
            "Saya sudah datang ke Intan Cafe setiap pagi selama setahun. Bukan hanya kopinya yang luar biasa—kehangatan staf dan sudut-sudutnya yang nyaman menjadikannya awal yang sempurna untuk hari saya."
          </h3>
          <p className="font-medium uppercase tracking-widest text-sm text-[var(--color-cafe-muted)]">— Michael T., Warga Lokal</p>
        </motion.div>
      </section>

      {/* Footer / Visit Us */}
      <footer id="visit" className="bg-[#2D1B15] text-white/80 py-20 border-t-8 border-[var(--color-cafe-accent)] overflow-hidden">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 md:gap-8"
        >
          
          {/* Brand */}
          <motion.div variants={fadeIn}>
            <a href="#home" className="text-3xl font-serif font-bold text-white tracking-wide block mb-6">
              Intan Cafe
            </a>
            <p className="mb-6 max-w-xs leading-relaxed">
              Sudut nyaman Anda di kota ini. Menyajikan kopi artisan dan kue-kue segar dengan penuh kehangatan.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-cafe-accent)] hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-cafe-accent)] hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeIn}>
            <h4 className="text-white font-serif text-xl font-bold mb-6">Lokasi Kami</h4>
            
            <div className="space-y-6">
              {/* Cilandak Branch */}
              <div>
                <h5 className="text-white font-bold mb-2">Intan Cafe Cilandak</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[var(--color-cafe-accent)] shrink-0 mt-0.5" />
                    <span>Jl. Intan RSPP Utara No.Kav C08, Cilandak Bar.,<br />Kec. Cilandak, Kota Jakarta Selatan 12430</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[var(--color-cafe-accent)] shrink-0" />
                    <span>Buka Setiap Hari: Tutup pukul 23.30</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[var(--color-cafe-accent)] shrink-0" />
                    <span>089678846767</span>
                  </li>
                </ul>
              </div>

              {/* Cinere Branch */}
              <div>
                <h5 className="text-white font-bold mb-2">Intan Cafe Cinere</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[var(--color-cafe-accent)] shrink-0 mt-0.5" />
                    <span>Jl. Meruyung Raya No.130, Limo,<br />Kec. Limo, Kota Depok, Jawa Barat 16514</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[var(--color-cafe-accent)] shrink-0" />
                    <span>Buka Setiap Hari: Tutup pukul 23.00</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[var(--color-cafe-accent)] shrink-0" />
                    <span>089678846767</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/10 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p>&copy; {new Date().getFullYear()} Intan Cafe. Hak cipta dilindungi undang-undang.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat dan Ketentuan</a>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
