import ItemList from "./item-list";

export default function Page() {
  return (
    <main>
      <h1 className="font-bold text-5xl center-text mb-5 mt-5 ml-5">Shopping List</h1>
        <div className="ml-5 mb-3">
          <p>Our shop is designated to provide the best quality of technological devices, from accessories, to laptops, to phones, and more!</p>
          <p>We accept all cashless payments.</p>
        </div>
      <ItemList/>
    </main>
  );
}