type Product = {
  id: number;
  name: string;
  stock: "inStock" | "outOfStock";
  price: number;
  quantity: number;
};

let products: Product[] = [
  { id: 100, name: "prodOne", stock: "outOfStock", price: 2000, quantity: 2 },
];

const findTotalVal = (prodarr: Product[]): number => {
  if (prodarr.length < 1) return 0;

  let totalval = 0;
  prodarr.forEach((ele: Product) => {
    if (ele.stock === "inStock") {
      totalval = totalval + ele.price * ele.quantity;
    }
  });

  return totalval;
};

const totalNumProducts = (parr: Product[]): number => {
  if (parr.length < 1) return 0;
  return parr.length;
};

const mostExpProduct = (prod: Product[]): Product | void => {
  let prodExpensive = prod.filter((ele) => ele.stock === "inStock");
  if (prodExpensive.length < 1) return [];
  const exp = prodExpensive.reduce((acc, cval) =>
    cval.price > acc.price ? cval : acc,
  );
  return exp;
};

const lowStockVal = (prod: Product[]): Product[] => {
  let lowStock = prod.filter((val: Product) => val.quantity < 5);
  return lowStock;
};

let totalInVal = findTotalVal(products);
let totaQuanVal = totalNumProducts(products);
let expensiveOneVal = mostExpProduct(products);
let lowInStock = lowStockVal(products);
console.log(expensiveOneVal);
