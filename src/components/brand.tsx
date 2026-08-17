import Image from "next/image";
import Link from "next/link";

export function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="ResourceHive home">
      <Image src="/resourcehive-mark.svg" alt="" width={34} height={34} />
      <span className="font-serif text-2xl tracking-[-0.035em] text-ink">ResourceHive</span>
    </Link>
  );
}
