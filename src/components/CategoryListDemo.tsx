import React from 'react';
import { CategoryList, Category } from '@/components/ui/category-list';
import { TrendingUp, Users, Zap, BarChart3, Network, Code } from 'lucide-react';

const automationCategories: Category[] = [
  {
    id: 1,
    title: 'Lead Conversion Automation',
    subtitle: 'Respond instantly, follow up automatically, and close 2–3× more clients without hiring extra salespeople.',
    onClick: () => console.log('Navigating to Lead Conversion Automation...'),
    icon: <TrendingUp className="w-8 h-8" />,
    featured: true,
  },
  {
    id: 2,
    title: 'Customer Retention Systems',
    subtitle: 'Keep clients engaged, upsell effortlessly, and prevent revenue leaks through automated touchpoints.',
    onClick: () => console.log('Navigating to Customer Retention Systems...'),
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: 3,
    title: 'AI Workflow Engines',
    subtitle: 'Turn bottlenecks into cash flow by automating manual processes across departments.',
    onClick: () => console.log('Navigating to AI Workflow Engines...'),
    icon: <Zap className="w-8 h-8" />,
  },
  {
    id: 4,
    title: 'Data-Driven Decisions',
    subtitle: 'Use real-time analytics to spot profit opportunities before your competitors do.',
    onClick: () => console.log('Navigating to Data-Driven Decisions...'),
    icon: <BarChart3 className="w-8 h-8" />,
  },
  {
    id: 5,
    title: 'Integrated Ecosystem',
    subtitle: 'Connect your tools, CRM, and communication stack so money stops slipping through cracks.',
    onClick: () => console.log('Navigating to Integrated Ecosystem...'),
    icon: <Network className="w-8 h-8" />,
  },
  {
    id: 6,
    title: 'Custom Automation Builds',
    subtitle: 'Bespoke systems built to your exact business model — not cookie-cutter bots.',
    onClick: () => console.log('Navigating to Custom Automation Builds...'),
    icon: <Code className="w-8 h-8" />,
  },
];

const CategoryListDemo = () => {
  return (
    <div className="w-full min-h-screen bg-background">
      <CategoryList
        title="Automations That"
        subtitle="Multiply Revenue — Not Just Save Time"
        description="Northbyte builds systems that help businesses scale faster, close more deals, and keep revenue flowing without needing more staff. Our automations pay for themselves by unlocking speed, consistency, and predictable growth."
        categories={automationCategories}
        closingText="Every second saved is a sale gained. Northbyte turns your business into a self-running revenue machine."
      />
    </div>
  );
};

export default CategoryListDemo;
