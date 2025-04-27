'use client';

import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';

import ZapIcon from './img/sidebar/ZapIcon';
import MonitorIcon from './img/sidebar/MonitorIcon';
import ShieldCheckIcon from './img/sidebar/ShieldCheckIcon';
import PluginIcon from './img/sidebar/PluginIcon';
import CommerceIcon from './img/sidebar/CommerceIcon';
import WebhookIcon from './img/sidebar/WebhookIcon';
import { useSidebarStore } from '../hooks/useSidebarStore'; 

const items = [
  {
    title: 'Home',
    icon: ZapIcon,
    href: '/docs',
    links: [
      { href: '/docs/intro', label: 'Introduction' },
      { href: '/docs/environment', label: 'Environments' },
      { href: '/docs/test-card', label: 'Test credentials' },
      { href: '/docs/errors', label: 'Errors' },
      { href: '/docs/api-keys-authorization', label: 'API Keys & Authorization' },
    ],
  },
  {
    title: 'Integrating Klump',
    icon: MonitorIcon,
    href: '/docs/integrating-klump',
    links: [
      { href: '/docs/getting-started', label: 'Getting Started' },
      { href: '/docs/product-testing', label: 'Product Testing' },
      { href: '/docs/payment-pages', label: 'Payment Pages' },
    ],
  },
  {
    title: 'Verification',
    icon: ShieldCheckIcon,
    href: '/docs/verification',
    links: [
      { href: '/docs/transaction-verification', label: 'Transaction Verification' },
    ],
  },
  {
    title: 'Webhooks',
    icon: WebhookIcon,
    href: '/docs/webhooks',
    links: [
      { href: '/docs/webhook-getting-started', label: 'Webhook Getting Started' },
      { href: '/docs/environme', label: 'Environments' },
      { href: '/docs/test-card', label: 'Test credentials' },
      { href: '/docs/errors', label: 'Errors' },
      { href: '/docs/api-keys-authorization', label: 'API Keys & Authorization' },
    ],
  },
  {
    title: 'Plugins & Library',
    icon: PluginIcon,
    href: '/docs/plugins',
    links: [
      { href: '/docs/j', label: 'Introduction' },
      { href: '/docs/environ', label: 'Environments' },
      { href: '/docs/test-card', label: 'Test credentials' },
      { href: '/docs/errors', label: 'Errors' },
      { href: '/docs/api-keys-authorization', label: 'API Keys & Authorization' },
    ],
  },
  {
    title: 'Klump Commerce',
    icon: CommerceIcon,
    href: '/docs/commerce',
    links: [
      { href: '/docs/i', label: 'Introduction' },
      { href: '/docs/enviro', label: 'Environments' },
      { href: '/docs/test-card', label: 'Test credentials' },
      { href: '/docs/errors', label: 'Errors' },
      { href: '/docs/api-keys-authorization', label: 'API Keys & Authorization' },
    ],
  },
];

export function SideNav() {
  const router = useRouter();
  const pathname = router.pathname;

  const [openSection, setOpenSection] = useState<string | null>('Home');

  const handleToggle = (title: string) => {
    setOpenSection((prev) => (prev === title ? null : title));
  };

  const isOpen = useSidebarStore((state) => state.isOpen);
  const closeSidebar = useSidebarStore((state) => state.close);

  return (
     <nav
        className={`fixed top-[130px] left-0 z-50 h-full w-full bg-white border-r border-gray-200 px-4 py-6 text-sm transform transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:h-[calc(100vh-4rem)] lg:block`}>
      <ul className="space-y-6">
        {items.map((section) => {
          const Icon = section.icon;
          const hasChildren = !!section.links;
          const isExpanded = openSection === section.title;
          const isActive = pathname === section.href || section.links?.some(link => pathname === link.href);

          return (
            <li key={section.title}>
              <div className={`flex-1 text-left flex items-center gap-2 font-medium px-2 py-2 rounded cursor-pointer transition group ${isActive
                ? 'text-[#192C69] font-semibold bg-indigo-50 px-2 py-1 rounded'
                : 'text-gray-700 group-hover:text-gray-900'
                }`}
                onClick={() => handleToggle(section.title)}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <Link
                  href={section.href}
                  
                >
                  {section.title}
                </Link>
              </div>

              {hasChildren && isExpanded && (
                <ul className="relative mt-3 ml-[15px]">

                  {section.links.map((link, index) => {
                    const isSubActive = pathname === link.href;
                    return (
                      <li key={link.href} className="relative pl-5 border-l border-gray-200 py-2">
                        {index === 0 && (
                          <div className="absolute w-3 h-5 -left-1.5 -top-1 bg-white z-10" />
                        )}
                        <div className={`block transition text-sm absolute -left-1 top-3.5 w-2 h-2 rounded-full z-10 ${isSubActive
                          ? 'bg-[#192C69]'
                          : 'bg-gray-200'
                          }`} />

                        {index === section.links.length -1 && (
                          <div className="absolute w-3 h-5 -left-1.5 -bottom-1.5 bg-white z-10" />
                        )}

                        <Link
                          href={link.href}
                          className={`block transition text-sm ${isSubActive
                            ? 'text-[#192C69] font-medium'
                              : 'text-gray-800 hover:text-gray-900'
                            }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}

            </li>
          );
        })}
      </ul>
    </nav>
  );
}
