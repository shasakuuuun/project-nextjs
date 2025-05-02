import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Gallery: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gallery | My Next.js App</title>
        <meta name="description" content="Koleksi gambar sederhana di halaman gallery" />
      </Head>

      <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Gallery Sederhana</h1>
            <Link
              href="/"
              className="px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Kembali
            </Link>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="relative w-full h-48 rounded overflow-hidden shadow-sm">
                <Image
                  src={`https://picsum.photos/400/300?random=${num}`}
                  alt={`Gambar ${num}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Gallery;
