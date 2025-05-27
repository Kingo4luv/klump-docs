import type { ReactNode } from 'react';

interface ContentSectionProps {
  id?: string;
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function ContentSection({
  id,
  title,
  icon,
  children,
  className = '',
}: ContentSectionProps) {
  return (
    <div id={id} className={className}>
      {title && (
        <div className="flex flex-col items-start gap-2 mb-4">
          {icon && <div className="flex-shrink-0 mt-1">{icon}</div>}
          <h2 className="text-[22px] font-semibold text-[#1F1F2D]">
            {title}
          </h2>
        </div>
      )}
      <div className="text-base text-[#1F1F2D] space-y-4">
        {children}
      </div>
    </div>
  );
}