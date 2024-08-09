import AtomButton from "@/app/_components/atoms/Button";
import AtomHero from "@/app/_components/atoms/Hero";

export default function UserPage() {
  return (
    <AtomHero>
      <h1>Welcome</h1>
      <form className="" method="post" action={"/auth/logout"}>
        <AtomButton buttonType="btn-primary">Logout</AtomButton>
      </form>
    </AtomHero>
  );
}
