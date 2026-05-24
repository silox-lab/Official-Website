import Layout from "@/components/layout";
import { setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";

export default async function PhilosophyLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  const pathname = `/${locale}/philosophy`;

  return (
    <Layout
      locale={locale}
      className="flex flex-col min-h-screen"
      header={{
        pathname,

        variant: "transparent",
        withBorder: false,
        withBackdrop: false,
        className: "absolute top-0 bg-transparent shadow-none border-none"
      }}
    >
      {children}
    </Layout>
  );
}
