"use client";

import { useFormStatus } from "react-dom";

export const SubmitButtonLoading = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? "Menyimpan..." : "Bagikan Gorengan"}
    </button>
  );
};
