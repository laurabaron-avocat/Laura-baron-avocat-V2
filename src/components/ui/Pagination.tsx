'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = ''
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = [];
  const showEllipsis = totalPages > 7;

  if (!showEllipsis) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage <= 4) {
      pages.push(1, 2, 3, 4, 5, '...', totalPages);
    } else if (currentPage >= totalPages - 3) {
      pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
    }
  }

  return (
    <nav className={`flex items-center justify-center space-x-2 ${className}`} aria-label="Pagination">
      {/* Bouton Précédent */}
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`
          flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors
          ${currentPage === 1
            ? 'text-gray-400 cursor-not-allowed bg-gray-100'
            : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:text-or'
          }
        `}
        aria-label="Page précédente"
      >
        <ChevronLeft size={16} className="mr-1" />
        Précédent
      </button>

      {/* Numéros de page */}
      <div className="flex items-center space-x-1">
        {pages.map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={`ellipsis-${index}`}
                className="px-3 py-2 text-sm text-gray-500"
              >
                ...
              </span>
            );
          }

          const pageNumber = page as number;
          const isCurrentPage = pageNumber === currentPage;

          return (
            <button
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
              className={`
                px-3 py-2 text-sm font-medium rounded-lg transition-colors
                ${isCurrentPage
                  ? 'bg-or text-white border border-or'
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:text-or hover:border-or'
                }
              `}
              aria-label={`Page ${pageNumber}`}
              aria-current={isCurrentPage ? 'page' : undefined}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>

      {/* Bouton Suivant */}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`
          flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors
          ${currentPage === totalPages
            ? 'text-gray-400 cursor-not-allowed bg-gray-100'
            : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:text-or'
          }
        `}
        aria-label="Page suivante"
      >
        Suivant
        <ChevronRight size={16} className="ml-1" />
      </button>
    </nav>
  );
}