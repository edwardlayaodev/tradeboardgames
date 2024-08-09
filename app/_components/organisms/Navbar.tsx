import Link from "next/link";
import { createClient } from "@/app/_utils/supabase/server";
import AtomBrand from "../atoms/Brand";
export default async function OrganismNavbar() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="bg-base-100 px-4 fixed w-full">
      <div className="navbar max-w-[1280px] mx-auto">
        <div className="navbar-start">
          <Link
            className="flex flex-row justify-center items-center gap-2"
            href={"/"}
          >
            <AtomBrand
              logoProps={{
                src: "/dice.svg",
                width: 32,
                height: 32,
                alt: "dice-logo",
              }}
              label={<span className="text-neutral">tradeboardgames</span>}
            />
          </Link>
        </div>

        <div className="navbar-end">
          {!user && (
            <Link
              href={"/sign-in"}
              className="btn btn-primary text-neutral-100"
            >
              Sign-In
            </Link>
          )}
          {user && (
            <Link href={"/dashboard/user"} className="btn btn-primary">
              My Account
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
