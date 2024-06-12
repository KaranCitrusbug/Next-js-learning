import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex h-96">
      <div className="m-auto">
        <h1 className="font-black text-[#84a98c] text-5xl">
          May be you lost!!
        </h1>
        <div className="text-center mt-5 text-xl font-semibold text-white">
          <Link href={"/"}>Go to Home</Link>
        </div>
      </div>
    </div>
  );
}
