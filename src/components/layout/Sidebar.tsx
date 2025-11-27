// import { X } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Sidebar({
//   isOpen,
//   onClose,
// }: {
//   isOpen: boolean;
//   onClose: () => void;
// }) {
//   return (
//     <>
//       {/* Затемнение фона */}
//       {isOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-40"
//           onClick={onClose}
//         />
//       )}
      
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex justify-between items-center p-4 border-b">
//           <h2 className="text-lg font-bold">Меню</h2>
//           <button onClick={onClose}>
//             <X className="w-6 h-6" />
//           </button>
//         </div>

//         <nav className="flex flex-col p-4 gap-4">
//           <Link to="/" onClick={onClose} className="py-2 hover:text-blue-600">ГЛАВНАЯ</Link>
//           <Link to="/men" onClick={onClose} className="py-2 hover:text-blue-600">МУЖСКОЕ</Link>
//           <Link to="/women" onClick={onClose} className="py-2 hover:text-blue-600">ЖЕНСКОЕ</Link>
//           <Link to="/kids" onClick={onClose} className="py-2 hover:text-blue-600">ДЕТСКОЕ</Link>
//           <Link to="/catalog" onClick={onClose} className="py-2 hover:text-blue-600">ВЕСЬ КАТАЛОГ</Link>
//           <Link to="/cart" onClick={onClose} className="py-2 hover:text-blue-600">КОРЗИНА</Link>
//         </nav>
//       </div>
//     </>
//   );
// }