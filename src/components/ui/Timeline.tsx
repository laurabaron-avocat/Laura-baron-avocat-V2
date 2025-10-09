import { CheckCircle } from 'lucide-react';

interface TimelineStep {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface TimelineProps {
  steps: TimelineStep[];
}

export default function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative px-2">
      {steps.map((step, index) => (
        <div key={index} className="relative flex items-start pb-6 md:pb-8 last:pb-0">
          {/* Connector line */}
          {index < steps.length - 1 && (
            <div className="absolute left-3 md:left-4 top-6 md:top-8 w-0.5 h-full bg-gray-200" />
          )}
          
          {/* Icon */}
          <div className="relative z-10 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-amber-600 rounded-full mr-3 md:mr-4 flex-shrink-0">
            {step.icon || <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />}
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 leading-tight">
              {step.title}
            </h3>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}