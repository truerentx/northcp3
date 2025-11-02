"use client";
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

// Define the type for a single category item
export interface Category {
  id: string | number;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  featured?: boolean;
}

// Define the props for the CategoryList component
export interface CategoryListProps {
  title: string;
  subtitle?: string;
  description?: string;
  categories: Category[];
  headerIcon?: React.ReactNode;
  closingText?: string;
  className?: string;
}

export const CategoryList = ({
  title,
  subtitle,
  description,
  categories,
  headerIcon,
  closingText,
  className,
}: CategoryListProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | number | null>(null);

  return (
    <div className={cn("w-full bg-background text-foreground p-8 md:p-12 lg:p-16", className)}>
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          {headerIcon && (
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/80 to-primary mb-6 text-primary-foreground">
              {headerIcon}
            </div>
          )}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-3 tracking-tighter leading-tight">{title}</h1>
          {subtitle && (
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary mb-8 tracking-tighter leading-tight">{subtitle}</h2>
          )}
          {description && (
            <p className="text-xl md:text-2xl text-foreground/80 mt-8 max-w-4xl mx-auto leading-relaxed font-semibold">
              {description}
            </p>
          )}
        </div>

        {/* Categories List */}
        <div className="space-y-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group"
              onMouseEnter={() => setHoveredItem(category.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={category.onClick}
            >
              <div
                className={cn(
                  "relative overflow-hidden border bg-card transition-all duration-300 ease-in-out cursor-pointer",
                  hoveredItem === category.id
                    ? 'h-40 border-primary shadow-lg shadow-primary/20 bg-primary/5'
                    : 'h-28 border-border hover:border-primary/50'
                )}
              >
                {/* Corner brackets that appear on hover */}
                {hoveredItem === category.id && (
                  <>
                    <div className="absolute top-3 left-3 w-6 h-6">
                      <div className="absolute top-0 left-0 w-4 h-0.5 bg-primary" />
                      <div className="absolute top-0 left-0 w-0.5 h-4 bg-primary" />
                    </div>
                    <div className="absolute bottom-3 right-3 w-6 h-6">
                      <div className="absolute bottom-0 right-0 w-4 h-0.5 bg-primary" />
                      <div className="absolute bottom-0 right-0 w-0.5 h-4 bg-primary" />
                    </div>
                  </>
                )}

                {/* Content */}
                <div className="flex items-center justify-between h-full px-8 md:px-10">
                  <div className="flex-1">
                    <h3
                      className={cn(
                        "font-black transition-colors duration-300 tracking-tight",
                        category.featured ? 'text-3xl md:text-4xl lg:text-5xl' : 'text-2xl md:text-3xl lg:text-4xl',
                        hoveredItem === category.id ? 'text-primary' : 'text-foreground'
                      )}
                    >
                      {category.title}
                    </h3>
                    {category.subtitle && (
                      <p
                        className={cn(
                          "mt-2 transition-colors duration-300 text-base md:text-lg font-semibold",
                           hoveredItem === category.id ? 'text-foreground/90' : 'text-muted-foreground'
                        )}
                      >
                        {category.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Icon appears on the right on hover */}
                  {category.icon && hoveredItem === category.id && (
                    <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 ml-6">
                      {React.cloneElement(category.icon as React.ReactElement, { className: "w-12 h-12" })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Text */}
        {closingText && (
          <div className="text-center mt-16 md:mt-20 lg:mt-24">
            <p className="text-2xl md:text-3xl lg:text-4xl text-foreground font-black tracking-tight leading-tight">
              {closingText}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
