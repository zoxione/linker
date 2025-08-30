import { AuthBlock } from "@/features/user/auth";

interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <AuthBlock />
    </div>
  );
}
