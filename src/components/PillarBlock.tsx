interface PillarBlockProps {
  number: string;
  category: string;
  title: string;
  paragraphs: string[];
}

export function PillarBlock({ number, category, title, paragraphs }: PillarBlockProps) {
  return (
    <div className="space-y-6">
      <div className="font-sans text-[11px] md:text-xs font-600 text-blue tracking-[0.2em] uppercase">
        {number}  {category}
      </div>

      <h3 className="font-serif text-2xl md:text-3xl font-400 text-navy leading-tight">
        {title}
      </h3>

      <div className="space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="font-sans text-base md:text-[17px] text-ink leading-[1.7]"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
