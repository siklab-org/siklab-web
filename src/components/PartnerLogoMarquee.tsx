export type PartnerLogo = {
  name: string;
  file: string;
};

export function PartnerLogoMarquee({ logos }: { logos: PartnerLogo[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:gap-x-12 sm:gap-y-12">
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="flex h-14 w-28 items-center justify-center sm:h-16 sm:w-40"
        >
          <img
            src={`/partners/${logo.file}`}
            alt={`${logo.name} logo`}
            className="max-h-9 max-w-full object-contain sm:max-h-11"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}
