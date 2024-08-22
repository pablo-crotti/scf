"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import InputText from "@/components/forms/InputText";
import Button from "@/components/Button";
import InputError from "@/components/forms/InputError";
import Loader from "@/components/Loader";

export default function SignInPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (response?.error) {
      setLoading(false);
      setPassword("");
      setError(response.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      {loading && <Loader />}
      <div className="px-8 py-8 rounded-lg border border-zinc-300 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 w-full dark:border sm:max-w-md">
        <form onSubmit={handleSubmit}>
          <h1 className="text-xl font-bold leading-tight tracking-tight text-zinc-800 md:text-2xl dark:text-white mb-8">
            Sign in to the platform
          </h1>
          <InputText
            type="email"
            label="Email"
            name="email"
            value={email}
            placeholder="name@company.com"
            autocomplete="email"
            error={false}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputText
            type="password"
            label="Password"
            name="password"
            value={password}
            placeholder="••••••••"
            error={false}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputError>{error}</InputError>
          <div className="w-full flex justify-end">
            <Button type="submit" disabled={!email || !password}>
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
