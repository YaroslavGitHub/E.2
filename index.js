/*** Don't touch this code! ***/
const generate_price = () => (Math.floor(Math.random() * 900) + 100) + " $";

let phones = [{
        title: "iPhone 8",
        price: generate_price()
    },
    {
        title: "iPhone 7",
        price: generate_price()
    },
    {
        title: "Apple iPhone 6",
        price: generate_price()
    },
    {
        title: "Samsung Galaxy S9",
        price: generate_price()
    },
    {
        title: "Nokia 3310",
        price: generate_price()
    },
    {
        title: "HTC Two M3",
        price: generate_price()
    },
    {
        title: "Lenovo H6000",
        price: generate_price()
    },
    {
        title: "Microsoft Lumia 950",
        price: generate_price()
    },
    {
        title: "Sony Ericsson K750 Gold",
        price: generate_price()
    }
];

console.dir(phones);
/***Write code after this line***/
for (var i = 0; i < phones.length; i++) {
    phones[i].price = +phones[i].price.slice(0, -2);
}




phones.sort(function (a, b) {
    return a.price - b.price
});


console.log("Вывод после сортировки: ");
	phones.forEach(function(element){ console.log(element);});
	