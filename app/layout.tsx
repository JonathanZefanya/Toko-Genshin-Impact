import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import ModalProvider from '@/providers/modal-provider';
import icon from '@/public/icon.png';
import { CartProvider } from '@/context/CartContext';

const font = Urbanist({ subsets: ['latin'], fallback: ['sans-serif'] });

export const metadata: Metadata = {
  title: 'Toko GI - Toko Online Terlengkap & Terpercaya',
  icons: { icon: "/icon.png" },
  description: 'Topup Blessing dan Genesis di Toko GI. Dapatkan produk berkualitas dengan harga terbaik dan pengiriman yang cepat!',
  keywords: ['toko online', 'toko topup', 'produk murah', 'Toko GI', 'topup', 'blessing', 'genesis', 'genesis crystal', 'topup','genshin', 'genshin impact'],
  authors: [{ name: 'Toko Genshin Impact', url: 'https://tokogi.xead.my.id' }],
  openGraph: {
    title: 'Toko GI - Toko Top Up Genshin Impact Terlengkap & Terpercaya',
    description: 'Topup Blessing dan Genesis di Toko GI. Dapatkan produk berkualitas dengan harga terbaik dan pengiriman yang cepat!',
    url: 'https://tokogi.xead.my.id',
    siteName: 'Toko-GI',
    images: [
      {
        url: 'https://bio.linkcdn.cc/upload/2021123107/164093543711675368.png',
        width: 1200,
        height: 630,
        alt: 'Toko-GI - Toko Top Up Terlengkap & Terpercaya',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@xeadesta',
    title: 'Toko-GI - Toko Online Terlengkap & Terpercaya',
    description: 'Topup Blessing dan Genesis di Toko GI. Dapatkan produk berkualitas dengan harga terbaik dan pengiriman yang cepat!',
    images: ['https://bio.linkcdn.cc/upload/2021123107/164093543711675368.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <CartProvider>
          <ModalProvider />
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
