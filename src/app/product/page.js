// import items from "../items.json";

export default async function Product() {
  let json="https://65db88a53ea883a15291dfa5.mockapi.io/product"    ///website to crease custom api:-https://mockbin.io/
  const res = await fetch(json);
  const data = await res.json();
  return (
    <div>
      <section>
        <div className="container px-5 py-24 mx-auto sm:py-90">
          <div className="flex justify-center flex-wrap gap-8 ">
            {data.map(item => (
              <div key={item.id} className="w-1/4 p-1 mx-auto">
                <div className="block relative h-64 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.image} />
                </div>
                <div className="mt-4">
                  <h2 className="text-black title-font text-lg font-medium text-center">{item.name}</h2>
                  <label className="text-2xl font-bold p-4">${item.price}</label>
                  {/* <p>{item.description}</p> */}
                  <button className="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded mt-4">
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