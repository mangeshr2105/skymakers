import { Metadata } from 'next';
import PropertiesLayoutClient from './PropertiesLayoutClient';

export const metadata: Metadata = {
  title: 'Our Properties | SkyMakers',
  description: 'Explore our exclusive collection of premium properties',
};

export default function PropertiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PropertiesLayoutClient>{children}</PropertiesLayoutClient>;
}
