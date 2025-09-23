"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}`);
  };
  return (
    <div className="bg-slate-600 flex flex-col justify-between items-center md:flex-row">
      <h1 className="text-2xl font-bold pt-1 pl-1">
        <Link href={"/"}>WikiRocket! </Link>
      </h1>
      <form className="text-2xl pb-0.5 m-1 flex gap-1" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-80 bg-slate-400 p-1 rounded-xl"
        />
        <button className="bg-slate-500 p-1 rounded-xl">🚀</button>
      </form>
    </div>
  );
}
