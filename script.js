let restaurants = [
    "冒烤鸭", "海底捞", "胡桃里包子", "蜀鱼记", "牛角", "卓上记", "张亮麻辣烫", "鸟贵族", "乐乐屋", "麻婆唐府", "阿苏米线"
];

document.addEventListener("DOMContentLoaded", function() {
    liff.init({ liffId: "YOUR_LIFF_ID" }, () => {
        document.getElementById('rollButton').addEventListener('click', rollRestaurant);
        document.getElementById('addButton').addEventListener('click', addRestaurant);
        document.getElementById('removeButton').addEventListener('click', removeRestaurant);
    }, err => console.error(err));
});

function rollRestaurant() {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const selectedRestaurant = restaurants[randomIndex];
    document.getElementById('output').innerText = `Selected Restaurant: ${selectedRestaurant}`;
}

function addRestaurant() {
    const newRestaurant = prompt("Enter the name of the new restaurant:");
    if (newRestaurant) {
        restaurants.push(newRestaurant);
        alert(`${newRestaurant} has been added to the list.`);
    }
}

function removeRestaurant() {
    const removeRestaurant = prompt("Enter the name of the restaurant to remove:");
    const index = restaurants.indexOf(removeRestaurant);
    if (index !== -1) {
        restaurants.splice(index, 1);
        alert(`${removeRestaurant} has been removed from the list.`);
    } else {
        alert(`${removeRestaurant} is not in the list.`);
    }
}
