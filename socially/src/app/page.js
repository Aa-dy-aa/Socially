import Feed from "@/components/Feed"
import Share from "@/components/Share";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" min-h-screen">
      <Link className="pb-3 flex items-center border-b-4 border-iconBlue" href="/">For you</Link>
      <Link className="pb-3 flex items-center" href="/">Following</Link>
      <Link className="pb-3 flex items-center" href="/">React.js</Link>
      <Link className="pb-3 flex items-center" href="/">Javascript</Link>
      <Link className="pb-3 flex items-center" href="/">CSS</Link>
    </div>
  );
}
