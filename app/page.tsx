import Head from 'next/head';

const PortfolioPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Portfolio</h1>
          <p className="mt-4 text-gray-500">Welcome to my portfolio page!</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
