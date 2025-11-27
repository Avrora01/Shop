// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   description: string;
// }

// interface ProductCardProps {
//   product: Product;
// }

// export default function ProductCard({ product }: ProductCardProps) {
//   return (
//     <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
//       <img 
//         src={product.image} 
//         alt={product.name}
//         className="w-full h-48 object-cover mb-4 rounded"
//       />
//       <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
//       <p className="text-gray-600 mb-2">{product.description}</p>
//       <p className="text-xl font-bold text-blue-600">${product.price}</p>
//       <button className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
//         Добавить в корзину
//       </button>
//     </div>
//   );
// }