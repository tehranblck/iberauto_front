export interface Product {
    id: number;
    title: string;
    image: string;
    price: string;
    oldPrice?: string;
    category: string;
    carBrand: string;
    carModel: string;
    code: string;
    manufacturer: string;
    manufacturerCode: string;
}

export const products: Product[] = [
    {
        id: 1,
        title: "Mühərrik Yağı",
        image: "/public/assets/img/product/product_1_1.png",
        price: "45.00 AZN",
        oldPrice: "55.00 AZN",
        category: "Yağlar",
        carBrand: "Mercedes-Benz",
        carModel: "C-Class",
        code: "MB-C-EDGE-5W30",
        manufacturer: "Castrol",
        manufacturerCode: "CST-EDGE-5W30-1L"
    },
    {
        id: 2,
        title: "Mühərrik Yağı",
        image: "/public/assets/img/product/product_1_1.png",
        price: "50.00 AZN",
        oldPrice: "60.00 AZN",
        category: "Yağlar",
        carBrand: "Mercedes-Benz",
        carModel: "E-Class",
        code: "MB-E-MAG-5W40",
        manufacturer: "Castrol",
        manufacturerCode: "CST-MAG-5W40-1L"
    },
    {
        id: 3,
        title: "Filtir",
        image: "/public/assets/img/product/product_1_2.png",
        price: "25.00 AZN",
        category: "Filtirlər",
        carBrand: "BMW",
        carModel: "3 Series",
        code: "BMW-3-C25011",
        manufacturer: "Mann-Filter",
        manufacturerCode: "MH-C25011"
    },
    {
        id: 4,
        title: "Filtir",
        image: "/public/assets/img/product/product_1_2.png",
        price: "30.00 AZN",
        category: "Filtirlər",
        carBrand: "BMW",
        carModel: "5 Series",
        code: "BMW-5-WK8424",
        manufacturer: "Mann-Filter",
        manufacturerCode: "MH-WK8424"
    },
    {
        id: 5,
        title: "Əyləc Diski",
        image: "/public/assets/img/product/product_1_3.png",
        price: "120.00 AZN",
        category: "Əyləc Sistemi",
        carBrand: "Audi",
        carModel: "A4",
        code: "AUDI-A4-09A40711",
        manufacturer: "Brembo",
        manufacturerCode: "BRM-DISC-09A40711"
    },
    {
        id: 6,
        title: "Əyləc Diski",
        image: "/public/assets/img/product/product_1_3.png",
        price: "150.00 AZN",
        category: "Əyləc Sistemi",
        carBrand: "Audi",
        carModel: "A6",
        code: "AUDI-A6-09A40712",
        manufacturer: "Brembo",
        manufacturerCode: "BRM-DISC-09A40712"
    },
    {
        id: 7,
        title: "Amortizator",
        image: "/public/assets/img/product/product_1_4.png",
        price: "180.00 AZN",
        category: "Süspansiya",
        carBrand: "Volkswagen",
        carModel: "Golf",
        code: "VW-GOLF-334339",
        manufacturer: "KYB",
        manufacturerCode: "KYB-SHOCK-334339"
    },
    {
        id: 8,
        title: "Amortizator",
        image: "/public/assets/img/product/product_1_4.png",
        price: "200.00 AZN",
        category: "Süspansiya",
        carBrand: "Volkswagen",
        carModel: "Passat",
        code: "VW-PASSAT-334340",
        manufacturer: "KYB",
        manufacturerCode: "KYB-SHOCK-334340"
    },
    {
        id: 9,
        title: "Sürtkü Yağı",
        image: "/public/assets/img/product/product_1_1.png",
        price: "35.00 AZN",
        category: "Yağlar",
        carBrand: "Toyota",
        carModel: "Camry",
        code: "TOY-CAMRY-1ESP-5W30",
        manufacturer: "Mobil",
        manufacturerCode: "EM-1ESP-5W30-1L"
    },
    {
        id: 10,
        title: "Sürtkü Yağı",
        image: "/public/assets/img/product/product_1_1.png",
        price: "40.00 AZN",
        category: "Yağlar",
        carBrand: "Toyota",
        carModel: "Corolla",
        code: "TOY-COROLLA-SUP-5W40",
        manufacturer: "Mobil",
        manufacturerCode: "EM-SUP-5W40-1L"
    }
]; 