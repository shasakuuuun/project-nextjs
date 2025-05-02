import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | My Next.js App</title>
        <meta name="description" content="About our application" />
      </Head>
      
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About Our App</h1>
          
          <p className="text-gray-700 mb-4">
            Ini adalah halaman about untuk aplikasi Next.js kami. Aplikasi ini menggunakan Pages Router
            dengan TypeScript dan komponen UI dari shadcn/ui.
          </p>
          
          <p className="text-gray-700 mb-6">
            Aplikasi ini juga mengintegrasikan React Hook Form dan Zod untuk validasi form yang
            type-safe dan pengalaman pengguna yang lebih baik.
          </p>

          {/* Tombol kiri-kanan */}
          <div className="flex items-center gap-4 mt-6">
            <Link 
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
            >
              Kembali ke Halaman Utama
            </Link>
            <Link 
              href="/gallery"
              className="ml-auto inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
            >
              anda ingin lihat gallery?
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default About;
