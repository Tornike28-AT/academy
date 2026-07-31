import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Script from "next/script";
import Navbar from "@/components/Navbar";

const geoHakuna = localFont({
  src: [
    {
      path: "../public/fonts/geo-hakuna-heading.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/geo-hakuna-heading.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/geo-hakuna-heading.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-geo-hakuna",
  display: "swap",
});




export const metadata = {
  metadataBase: new URL("https://tsaavaacademy.ge"),
  // Swap in your real domain once purchased — metadataBase auto-prefixes all og:image/canonical URLs below

  title: "გახდი უკეთესი ფეხბურთელი | Tsaava Academy",

  description:
    "პროფესიონალური ინდივიდუალური საფეხბურთო ვარჯიშები თბილისში ყველა ასაკისა და დონისთვის. ტექნიკური, ფიზიკური და ტაქტიკური განვითარება პერსონალურად შენზე მორგებული.",
  // ~155 chars, includes location + service keywords naturally

  keywords: [
  "ინდივიდუალური ფეხბურთი",
  "ინდივიდუალური ფეხბურთის ვარჯიში",
  "ინდივიდუალური ფეხბურთის მომზადება",
  "ფეხბურთის ინდივიდუალური აკადემია",
  "ფეხბურთის აკადემია",
  "საფეხბურთო აკადემია",
  "საფეხბურთო აკადემია თბილისი",
  "ფეხბურთის სკოლა",
  "ფეხბურთის სკოლა თბილისი",
  "ფეხბურთის გაკვეთილები",
  "ფეხბურთის ვარჯიში",
  "ფეხბურთის ვარჯიში ბავშვებისთვის",
  "ბავშვთა ფეხბურთი",
  "ბავშვთა ფეხბურთის აკადემია",
  "პირადი მწვრთნელი ფეხბურთში",
  "ფეხბურთის პერსონალური მწვრთნელი",
  "ტექნიკის განვითარება ფეხბურთში",
  "ფეხბურთის ტექნიკური მომზადება",
  "ფეხბურთის ინდივიდუალური პროგრამა",
  "ფეხბურთის განვითარება",
  "ფეხბურთის ტრენინგი",


  // ინგლისური
  "football training Tbilisi",
  "football academy Tbilisi",
  "football academy Georgia",
  "private football coach",
  "private football training",
  "individual football training",
  "individual football academy",
  "soccer training Tbilisi",
  "soccer academy Tbilisi",
  "soccer coach Tbilisi",
  "football lessons for kids",
  "kids football academy",
  "youth football academy",
  "football skills training",
  "technical football training",
  "one on one football training",
  "personal football coach",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "ინდივიდუალური საფეხბურთო ვარჯიშები თბილისში | Tsaava Academy",
    description:
      "პროფესიონალური ინდივიდუალური საფეხბურთო ვარჯიშები თბილისში ყველა ასაკისა და დონისთვის.",
    url: "https://tsaavaacademy.ge",
    siteName: "Tsaava Individual Academy",
    images: [
      {
        url: "/logo-bg.webp", // create this — see note below
        width: 1200,
        height: 630,
        alt: "Tsaava Individual Academy - პირადი საფეხბურთო ვარჯიშები",
      },
    ],
    locale: "ka_GE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ინდივიდუალური საფეხბურთო ვარჯიშები თბილისში | Tsaava Academy",
    description:
      "პროფესიონალური ინდივიდუალური საფეხბურთო ვარჯიშები თბილისში ყველა ასაკისა და დონისთვის.",
    images: ["/logo-bg.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ka"
      className={`${geoHakuna.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      

 <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-56MJ3P9MSF"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-56MJ3P9MSF');
          `}
        </Script>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}