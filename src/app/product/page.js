// import items from "../items.json";

export default async function Product() {
  let API_URL="https://65db88a53ea883a15291dfa5.mockapi.io/product"    ///website to crease custom api:-https://mockbin.io/
  const res = await fetch(API_URL);
  const data = await res.json();
  return (
    <div>
      <section>
        <div className="container px-5 py-24 mx-auto sm:py-90">
          <div className="flex justify-center flex-wrap gap-8 ">
            {data.map(item => (
              <div key={item.id} className="w-1/4 p-4 mx-auto bg-white shadow-lg rounded-lg">
                <div className="block relative h-64 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.image} />
                </div>
                <div className="mt-4 text-center">
                  <div className="flex justify-between items-center">
                    <h2 className="text-gray-900 title-font text-lg font-medium">{item.name}</h2>
                    <label className="text-2xl font-bold text-gray-900">${item.price}</label>
                  </div>
                  {/* <p>{item.description}</p> */}
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