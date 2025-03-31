"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function Stats() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["stats"],
    queryFn: () => fetch(`/api/stats`).then((res) => res.json()),
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  console.log(error);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
