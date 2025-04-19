"use client";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";

export default function BootstrapInit() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  return (
    <div>
      <ScrollToTop smooth color="#E8092E" />
    </div>
  );
}
