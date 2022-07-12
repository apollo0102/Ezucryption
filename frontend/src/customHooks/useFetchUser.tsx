import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function useFetchUser() {
  const router = useRouter();
  const user = useSelector((state: { user: any }) => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (user.isLoggedIn) {
      if (router.pathname.includes("auth")) {
        router.replace("/");
      }
      setLoading(false);
      return;
    }

    if (token) {
      router.replace("/");
    } else {
      router.replace("/auth/sign-in");
    }
    setLoading(false);
  }, []);

  return { loading };
}
