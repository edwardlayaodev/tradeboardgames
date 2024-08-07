import { Atom } from "./_components/atoms";
import Link from "next/link";
import { createClient } from "./_utils/supabase/server";
import axios from "axios";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // on mount check if user is authenticated

  return (
    <Atom.Hero>
      <div>Hello World!</div>
    </Atom.Hero>
  );
}
