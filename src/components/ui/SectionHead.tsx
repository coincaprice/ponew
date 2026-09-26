export function SectionHead({ eyebrow, title, subtitle, align = 'center', dark = false, as = 'h2' }: {
  eyebrow: string; title: string; subtitle?: string; align?: 'center' | 'left'; dark?: boolean; as?: 'h2' | 'h3';
}) {
  const Tag = as;
  const alignCls = align === 'center' ? 'text-center items-center mx-auto' : 'text-center md:text-left items-center md:items-start';
  return (
    <div className={`flex flex-col ${alignCls} max-w-[760px] mb-12 md:mb-16`}>
      <span className={`eyebrow ${dark ? 'eyebrow-dark' : ''} mb-5`}>{eyebrow}</span>
      <Tag className={`font-heading font-bold leading-[1.15] text-[28px] md:text-[38px] lg:text-[44px] ${dark ? 'text-white' : 'text-[#080F20]'}`}>{title}</Tag>
      {subtitle && <p className={`mt-4 text-[16px] md:text-[17px] leading-relaxed ${dark ? 'text-white/65' : 'text-[#5A6A85]'}`}>{subtitle}</p>}
    </div>
  );
}
