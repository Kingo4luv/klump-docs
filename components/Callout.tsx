// components/markdoc/Callout.tsx
import { ReactNode } from 'react';
import WarningIcon from './img/WarningIcon';
import HelpIcon from './img/HelpIcon';

type CalloutType = 'note' | 'warning' | 'help';

interface CalloutProps {
  title?: string;
  type?: CalloutType;
  children: ReactNode;
}

const iconMap = {
  note: <WarningIcon />,
  warning: <WarningIcon />,
  help: <HelpIcon />,
};

const bgMap = {
  note: 'bg-[#FFF9F1] border border-[#FCEED5]',
  warning: 'bg-[#FFF9F1] border border-[#FCEED5]',
  help: 'bg-[#F5F6FF] border border-[#E6E8F5]',
};

export default function Callout({ title, type, children }: CalloutProps) {
  return (
    <div className={`flex items-start gap-4 p-4 lg:p-6 rounded-xl ${bgMap[type]}`}>
      {/* Icon */}
      <div className="flex-shrink-0">{iconMap[type]}</div>
      {/* Content */}
      <div className="text-sm text-gray-900">
        {title && <p className="font-semibold mb-2">{title}</p>}
        <div className="[&>p]:mb-2 [&>p:last-child]:mb-0 max-w-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}
