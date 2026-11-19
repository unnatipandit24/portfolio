import { useState } from "react";

interface Props {
  src: string;
  alt: string;
}

export default function Logo({ src, alt }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <div className="logo">
      <img src={src} alt={alt} onError={() => setFailed(true)} />
    </div>
  );
}