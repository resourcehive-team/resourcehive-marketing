import Image from "next/image";
import Link from "next/link";

export function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="ResourceHive home">
      <Image src="/resourcehive-logo.png" alt="" width={34} height={34} />
      <span className="text-lg font-semibold tracking-tight text-ink">
        Resource<span className="text-[#bd7600]">Hive</span>
      </span>
    </Link>
  );
}
