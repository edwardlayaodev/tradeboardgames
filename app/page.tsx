import Image from "next/image";
import { Atom } from "./_components/atoms";
import { createClient } from "./_utils/supabase/server";
import { Zilla_Slab } from "next/font/google";
import Link from "next/link";

const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default async function Home() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // on mount check if user is authenticated

  return (
    <Atom.Hero>
      <section className="flex flex-row justify-center items-center gap-4">
        <div className="w-1/2 p-4">
          <h1 className={`${zilla.className} text-5xl font-bold text-left`}>
            Tired of Your Board Games? Then Trade Them!
          </h1>
          <h4 className="text-3xl mt-4 text-left">
            Discover the Ultimate Board Game and Puzzle Trading Platform
          </h4>
          <div className="mt-12 flex flex-row justify-center gap-4">
            <Link
              className="p-8 btn btn-primary flex flex-col justify-center items-center hover:-translate-y-1"
              href={"/sign-up"}
            >
              <div className="text-left">
                <p className="text-secondary-content">Ready to Trade?</p>
                <p className="text-neutral-100 text-3xl">Sign-Up Now </p>
              </div>
            </Link>

            <Atom.Button
              extraClass="p-8 flex flex-col justify-center items-center w-1/2 hover:-translate-y-1"
              buttonType="btn-secondary"
            >
              <div className="mx-auto">
                <p className="text-secondary-content text-left">
                  Need more details?
                </p>
                <p className="text-neutral-100 text-neutral-100 text-3xl">
                  Explore Features
                </p>
              </div>
            </Atom.Button>
          </div>
        </div>
        <div className="mockup-browser bg-base-300 border w-1/2">
          <div className="bg-base-100 flex justify-center px-32 py-32 italic">
            Some animated hero image here, related to boardgames and puzzles
          </div>
        </div>
      </section>
    </Atom.Hero>
  );
}
