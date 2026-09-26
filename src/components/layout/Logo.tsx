type Props = {
  href: string;
  size?: 'sm' | 'md';
  showText?: boolean;
  onClick?: () => void;
};

export function Logo({ href, size = 'md', showText = true, onClick }: Props) {
  const iconW = size === 'md' ? 38 : 26;
  const iconH = size === 'md' ? 30 : 20;

  return (
    <a href={href} onClick={onClick} className="group flex items-center gap-2.5 no-underline">
      <svg
        width={iconW}
        height={iconH}
        viewBox="0 0 38 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-105"
        aria-hidden
      >
        <path fillRule="evenodd" clipRule="evenodd" d="M18.764 1.39412C23.7097 3.48874 27.0949 7.94781 27.0949 13.0956C27.0949 18.2456 23.7085 22.7046 18.7628 24.7971C13.8182 22.7046 10.4307 18.2456 10.4307 13.0956C10.4307 7.94676 13.8182 3.48769 18.764 1.39412Z" fill="#002ED9" />
        <path fillRule="evenodd" clipRule="evenodd" d="M18.7699 1.3964C20.4838 0.486105 22.4389 0 24.5067 0C31.6944 0 37.5293 5.86913 37.5293 13.099C37.5293 20.3278 31.6944 26.1969 24.5067 26.1969C22.4389 26.1969 20.4838 25.7118 18.7688 24.8005C23.0912 22.7069 26.0525 18.2478 26.0525 13.099C26.0525 7.9501 23.0923 3.49102 18.7699 1.3964Z" fill="#0099FA" />
        <path fillRule="evenodd" clipRule="evenodd" d="M18.7605 24.7994C17.0455 25.7108 15.0894 26.1969 13.0226 26.1969H5.33701L1.87782 29.6764C1.56363 29.9924 1.09079 30.0869 0.679524 29.9158C0.268261 29.7446 0 29.3415 0 28.8931V1.69039C0 0.757003 0.75259 0 1.68054 0H13.0644C15.1175 0.0062996 17.059 0.492421 18.7615 1.39641C14.438 3.48998 11.4767 7.94905 11.4767 13.0979C11.4767 18.2479 14.438 22.7069 18.7605 24.7994Z" fill="#1A4DDE" />
      </svg>
      {showText && (
        <span
          className={`font-heading leading-none tracking-[-0.01em] text-white ${size === 'md' ? 'hidden sm:inline text-[20px]' : 'text-[16px]'}`}
        >
          <span className="font-bold">Pocket</span>
          <span className="font-normal text-white/85">Option</span>
        </span>
      )}
    </a>
  );
}
