interface ItalicCloserProps {
  children: React.ReactNode;
}

export function ItalicCloser({ children }: ItalicCloserProps) {
  return (
    <p className="font-serif text-[28px] md:text-3xl font-400 italic text-navy leading-snug pl-3">
      {children}
    </p>
  );
}
