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
  description: 'Belanja online kebutuhan sehari-hari, fashion, elektronik, dan banyak lagi di Toko GI. Dapatkan produk berkualitas dengan harga terbaik dan pengiriman cepat!',
  keywords: ['toko online', 'belanja online', 'produk murah', 'Toko GI', 'fashion', 'elektronik', 'promo toko online'],
  authors: [{ name: 'Toko GI Team', url: 'https://Toko-GI.com' }],
  openGraph: {
    title: 'Toko GI - Toko Online Terlengkap & Terpercaya',
    description: 'Belanja online kebutuhan sehari-hari, fashion, elektronik, dan banyak lagi di Toko-GI. Dapatkan produk berkualitas dengan harga terbaik dan pengiriman cepat!',
    url: 'https://Toko-GI.com',
    siteName: 'Toko-GI',
    images: [
      {
        url: 'https://Toko-GI.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Toko-GI - Toko Online Terlengkap & Terpercaya',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@xeadesta',
    title: 'Toko-GI - Toko Online Terlengkap & Terpercaya',
    description: 'Belanja online kebutuhan sehari-hari, fashion, elektronik, dan banyak lagi di Toko-GI. Dapatkan produk berkualitas dengan harga terbaik dan pengiriman cepat!',
    images: ['https://Toko-GI.com/images/og-image.jpg'],
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
