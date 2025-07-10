import Feed from "@/components/Feed"
import Share from "@/components/Share";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="px-4 pt-4 flex justify-between text-[var(--gray)] font-bold border-b-[1px] border-[var(--gray)]">
        <Link className="pb-3 flex items-center relative" href="/">
          For you
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--purple)] via-[var(--pink)] to-[var(--orange)]" />
        </Link>
        <Link className="pb-3 flex items-center" href="/">Following</Link>
        <Link className="pb-3 flex items-center" href="/">React.js</Link>
        <Link className="pb-3 flex items-center" href="/">Javascript</Link>
        <Link className="pb-3 flex items-center" href="/">CSS</Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
}
