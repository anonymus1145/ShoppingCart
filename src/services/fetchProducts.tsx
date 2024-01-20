const apiUrl = "https://api.escuelajs.co/api/v1/products/?categoryId=2"

export type Product = {
    id: number
    title: string
    price: number
    description: string
    image: string
}

export async function fetchProduct(number: number) {
    const response = await fetch(apiUrl, {
      method: "GET",
    });
    const data = await response.json();
  
    let product: Product = {
      id: data[number].id,
      title: data[number].title,
      price: data[number].price,
      description: data[number].description,
      image: data[number].image,
    };
  
    return product;
  }