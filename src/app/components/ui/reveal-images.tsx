function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

interface ImageSource {
  src: string;
  alt: string;
}

interface RevealImageListItemProps {
  text: string;
  images: [ImageSource, ImageSource];
}

function RevealImageListItem({ text, images }: RevealImageListItemProps) {
  const container = "absolute right-8 -top-1 z-40 h-20 w-16";
  const effect =
    "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-16 h-16 overflow-hidden transition-all rounded-md";

  return (
    <div className="group relative h-fit w-fit overflow-visible py-8">
      <h1 
        className="text-7xl font-black transition-all duration-500 group-hover:opacity-40"
        style={{ 
          color: '#F5F5F5',
          fontFamily: 'Playfair Display, serif',
        }}
      >
        {text}
      </h1>
      <div className={container}>
        <div className={effect}>
          <img alt={images[1].alt} src={images[1].src} className="h-full w-full object-cover" />
        </div>
      </div>
      <div
        className={cn(
          container,
          "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-12",
        )}
      >
        <div className={cn(effect, "duration-200")}>
          <img alt={images[0].alt} src={images[0].src} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

function RevealImageList() {
  const items: RevealImageListItemProps[] = [
    {
      text: "Discovery",
      images: [
        {
          src: "https://images.unsplash.com/photo-1763553113391-a659bee36e06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwZWxlZ2FudCUyMHZlbnVlJTIwZGVjb3JhdGlvbnxlbnwxfHx8fDE3NzM0MDA2MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Luxury Wedding Venue",
        },
        {
          src: "https://images.unsplash.com/photo-1767986012138-d02276728368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGNlcmVtb255JTIwc2V0dXAlMjBmbG93ZXJzfGVufDF8fHx8MTc3MzQwMDYxNHww&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Wedding Ceremony Setup",
        },
      ],
    },
    {
      text: "Design",
      images: [
        {
          src: "https://images.unsplash.com/photo-1638275559239-82bfdb0d68c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGNvbmZlcmVuY2UlMjBzZXR1cCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzM0MDA2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Corporate Event Setup",
        },
        {
          src: "https://images.unsplash.com/photo-1768508951405-10e83c4a2872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdhbGElMjBlbGVnYW50JTIwYmFucXVldCUyMGhhbGx8ZW58MXx8fHwxNzczNDAwNjE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Elegant Banquet Hall",
        },
      ],
    },
    {
      text: "Coordination",
      images: [
        {
          src: "https://images.unsplash.com/photo-1755704282977-340323fa52df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwY2VsZWJyYXRpb24lMjBlbGVnYW50JTIwZGVjb3J8ZW58MXx8fHwxNzczNDAwNjE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Birthday Party Decoration",
        },
        {
          src: "https://images.unsplash.com/photo-1758870041148-31d28fdf34d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwYXJ0eSUyMGJhbGxvb25zJTIwZWxlZ2FudCUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3MzQwMDYxNXww&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Luxury Party Celebration",
        },
      ],
    },
    {
      text: "Celebration",
      images: [
        {
          src: "https://images.unsplash.com/photo-1768488292764-8da1562789b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXN0aW5hdGlvbiUyMHdlZGRpbmclMjBiZWFjaCUyMHRyb3BpY2FsJTIwdmVudWV8ZW58MXx8fHwxNzczNDAwNjE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Destination Wedding Beach",
        },
        {
          src: "https://images.unsplash.com/photo-1646667640427-60051a721841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleG90aWMlMjB3ZWRkaW5nJTIwbG9jYXRpb24lMjBzdW5zZXQlMjBjZXJlbW9ueXxlbnwxfHx8fDE3NzM0MDA2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Exotic Wedding Sunset",
        },
      ],
    },
  ];
  
  return (
    <div className="w-full flex flex-col gap-1 rounded-sm px-8 py-4" style={{ background: '#0B0B0D' }}>
      <h3 
        className="text-sm font-black uppercase mb-4"
        style={{ 
          color: '#C6A75E',
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '0.1em',
        }}
      >
        Our Planning Process
      </h3>
      {items.map((item, index) => (
        <RevealImageListItem key={index} text={item.text} images={item.images} />
      ))}
    </div>
  );
}

export { RevealImageList };