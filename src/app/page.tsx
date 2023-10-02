import Head from "next/head";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section>
        <div>
          <h1 className="text-3x1 font-bold underline">Kenny Kin Kee Lai</h1>
          <h2>Frontend Developer and Hobbyist Photographer</h2>
          <Link href="/dashboard">Go to Dashboard</Link>
        </div>
        <button className="rounded-lg shadow-md px-4 py-2 hover:bg-green-200 font-semibold">
          Button
        </button>
      </section>
    </>
  );
}
