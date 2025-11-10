import { useState } from 'react';

export const ProductReviews = ({ loading, error, productComments }) => {
    const [page, setPage] = useState(1);
    const perPage = 5;
    const totalPages = Math.ceil(productComments.length / perPage);

    const start = (page - 1) * perPage;
    const currentComments = productComments.slice(start, start + perPage);

    return (
        <div>
            {loading ? (
                <p className="text-gray-500">Ladataan arvosteluja...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : productComments.length > 0 ? (
                <>
                    <ul className="space-y-3">
                        {currentComments.map((c, i) => (
                            <li key={i} className="border-b border-gray-200 pb-2">
                                <p className="text-yellow-500">{'★'.repeat(c.rating)}</p>
                                <p className="text-gray-800">{c.comment}</p>
                            </li>
                        ))}
                    </ul>

                    {/* Pagination controls */}
                    <div className="flex items-center justify-between mt-4">
                        <button
                            onClick={() => setPage((p) => Math.max(p - 1, 1))}
                            disabled={page === 1}
                            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                        >
                            Edellinen
                        </button>
                        <p>Sivu {page} / {totalPages}</p>
                        <button
                            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                            disabled={page === totalPages}
                            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                        >
                            Seuraava
                        </button>
                    </div>
                </>
            ) : (
                <p className="text-gray-500">Ei vielä arvosteluja.</p>
            )}
        </div>
    );
}

