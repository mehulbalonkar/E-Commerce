
import { items } from "../items";

export default function Product() {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-center flex-wrap gap-8">
            {items.map(item => (
              <div key={item.id} className="w-1/4 p-4">
                <div className="block relative h-64 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.image} />
                </div>
                <div className="mt-4">
                  <h2 className="text-white title-font text-lg font-medium">{item.name}</h2>
                  <p className="mt-1">${item.price}</p>
                  <p>{item.description}</p>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
