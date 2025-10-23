import React from "react";

const CompetitiveProgramming = () => {
  return (
    <section className="px-4 py-6 bg-white">
      <h2 className="text-3xl font-bold mb-8">Competitive Programming</h2>

      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-2xl font-semibold mb-4">AtCoder</h3>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-lg font-bold">Rating:</span>
            <span className="inline-block px-4 py-2 bg-green-500 text-white font-bold rounded">
              緑
            </span>
          </div>
          <a
            href="https://atcoder.jp/users/matchamatcho"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            AtCoderプロフィールを見る
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;
