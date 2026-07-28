import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";

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
  title: "Tsaava Individual Academy - პირადი მიდგომა. რეალური შედეგები.",
  description: "Tsaava Individual Academy - პირადი მიდგომა. რეალური შედეგები. პროფესიონალური ინდივიდუალური ვარჯიში ყველა ასაკისთვის & ყველა დონისთვის.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ka"
      className={`${geoHakuna.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}