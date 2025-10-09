import Link from 'next/link';
import { ArrowRight, DivideIcon as LucideIcon } from 'lucide-react';

interface DomainCardProps {
  title: string;
  description: string;
  href: string;
  icon: typeof LucideIcon;
}

export default function DomainCard({ title, description, href, icon: Icon }: DomainCardProps) {
  return (
    <Link href={href} className="group">
      <div className="card p-4 md:p-6 h-full hover:border-or transition-all duration-200 group-hover:shadow-lg">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Icon className="w-6 h-6 md:w-8 md:h-8 text-or" />
          </div>
          <div className="flex-1">
            <h3 className="text-base md:text-lg font-playfair font-semibold text-anthracite mb-2 leading-tight">
              {title}
            </h3>
            <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
              {description}
            </p>
            <div className="flex items-center text-or text-xs md:text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
              En savoir plus
              <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 ml-1 flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}