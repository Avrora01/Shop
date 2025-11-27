// import { Link } from 'react-router-dom';
// import ProductCard from '../layout/Header';

// // Данные прямо здесь - без изменения структуры!
// const featuredProducts = [
//   {
//     id: 1,
//     name: "Мужские кроссовки",
//     price: 59.99,
//     category: "men",
//     image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
//     description: "Стильные кроссовки для мужчин"
//   },
//   {
//     id: 2,
//     name: "Женская сумочка",
//     price: 79.99,
//     category: "women", 
//     image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
//     description: "Элегантная сумка для женщин"
//   },
//   {
//     id: 3,
//     name: "Детская куртка",
//     price: 45.99,
//     category: "kids",
//     image: "https://images.unsplash.com/photo-1509005084666-3cbc75184cbb?w=400",
//     description: "Теплая куртка для детей"
//   }
// ];

// export default function Home() {
//   return (
//     <div className="max-w-6xl mx-auto">
//       {/* Герой секция */}
//       <section className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-8 mb-8 text-center">
//         <h1 className="text-4xl font-bold mb-4">НОВАЯ КОЛЛЕКЦИЯ</h1>
//         <p className="text-xl mb-6">Лето 2024</p>
//         <Link 
//           to="/catalog" 
//           className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
//         >
//           Перейти в магазин →
//         </Link>
//       </section>

//       {/* Популярные товары */}
//       <section>
//         <h2 className="text-2xl font-bold mb-6">Популярные товары</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {featuredProducts.map(product => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }