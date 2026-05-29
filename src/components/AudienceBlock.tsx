interface AudienceBlockProps {
  title: string;
  description: string;
}

export function AudienceBlock({ title, description }: AudienceBlockProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-serif text-xl md:text-2xl font-400 text-navy leading-tight">
        {title}
      </h3>
      <p className="font-sans text-base md:text-[17px] text-ink leading-[1.7]">
        {description}
      </p>
    </div>
  );
}
