"use client";

import { useFormStatus } from "react-dom";

export const SubmitButtonLoading = () => {
  const { pending } = useFormStatus();
  return (
    <button disable={pending}>
      {pending ? "Menyimpan..." : "Bagikan Gorengan"}
    </button>
  );
};
