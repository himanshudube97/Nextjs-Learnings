import "./globals.css";
import MainHeader from "@/components/main-header/main-header";
export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}

//At least on root layout file needed, rest we can have more in individual folders.
//It makes a layout around some item.
//so here page.tsx has the page data that will be injected inside this layout.
//we have gobal css file.
