interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="mb-6">
      <span className="font-sans text-[11px] md:text-xs font-600 text-blue tracking-[0.2em] uppercase">
        {children}
      </span>
      <div className="w-10 h-0.5 bg-navy mt-3"></div>
    </div>
  );
}
