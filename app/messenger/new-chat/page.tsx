import Search from "@/app/ui/Search";
import Users from "@/app/ui/Users";
import React from "react";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const email = searchParams?.query || "";
  return (
    <div className="h-full relative">
      <Search />
      <Users email={email} />
    </div>
  );
}
