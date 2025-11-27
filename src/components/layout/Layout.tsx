// import { useState } from "react";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import Footer from "./Footer";

// export default function Layout({ children }: { children: React.ReactNode }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const openSidebar = () => setIsSidebarOpen(true);
//   const closeSidebar = () => setIsSidebarOpen(false);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header onOpenMenu={openSidebar} />
      
//       <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

//       <main className="flex-1 p-4">{children}</main>

//       <Footer />
//     </div>
//   );
// }