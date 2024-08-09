import AtomButton from "./_components/atoms/Button";
import AtomHero from "./_components/atoms/Hero";
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
    <AtomHero>
      <section className="flex flex-col-reverse lg:flex-row justify-center items-center gap-4">
        <div className="w-full lg:w-1/2 p-4">
          <h1
            className={`${zilla.className} text-4xl lg:text-5xl font-bold text-left`}
          >
            Tired of Your Board Games? Then Trade Them!
          </h1>
          <h4 className="text-xl lg:text-3xl mt-4 text-left">
            Discover the Ultimate Board Game and Puzzle Trading Platform
          </h4>
          <div className="mt-12 flex flex-col lg:flex-row justify-center gap-4">
            <Link
              className="p-8  w-full lg:w-[250px] btn btn-primary flex flex-col justify-center items-center hover:-translate-y-1"
              href={"/sign-up"}
            >
              <div className="text-left">
                <p className="text-secondary-content">Ready to Trade?</p>
                <p className="text-neutral-100 text-xl lg:text-2xl">
                  Sign-Up Now{" "}
                </p>
              </div>
            </Link>

            <AtomButton
              extraClass="p-8 flex flex-col justify-center items-center w-full lg:w-[250px] hover:-translate-y-1"
              buttonType="btn-secondary"
            >
              <div className="mx-auto">
                <p className="text-secondary-content text-left">
                  Need more details?
                </p>
                <p className="text-neutral-100 text-neutral-100 text-xl lg:text-2xl">
                  Explore Features
                </p>
              </div>
            </AtomButton>
          </div>
        </div>
        <div className="mockup-browser bg-base-300 border w-3/4 lg:w-1/2">
          <div className="bg-base-100 flex justify-center lg:px-32 md:py-32 italic">
            Some animated hero image here, related to boardgames and puzzles
          </div>
        </div>
      </section>
    </AtomHero>
  );
}
