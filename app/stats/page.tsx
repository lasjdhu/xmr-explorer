"use client";

import { fetchStats } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function Stats() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["stats"],
    queryFn: () => fetchStats(),
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
