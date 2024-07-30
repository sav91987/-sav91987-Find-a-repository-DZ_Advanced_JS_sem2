/* Задание 1
Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг,
 а также методы для добавления книги, удаления книги и получения информации о наличии книги.

Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

Реализуйте геттер allBooks, который возвращает текущий список книг.

Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку. */
console.log(`Задача 1
    `);

class Library {
    #books = [];

    constructor(books) {
        const booksSet = Array.from(new Set(books));
        if (booksSet.length !== books.length) {
            throw new Error("The provided array contains duplicate books");
        }
        this.#books = [...books];
    }

    showAllBooks() {
        if (this.#books.length === 0) {
            return "No books in the library";
        } else {
            return [...this.#books];
        }
    }

    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error(`Book "${title}" already exists in the library`);
        } else {
            this.#books.push(title);
        }
        console.log(this.showAllBooks());
    }

    removeBook(title) {
        if (!this.#books.includes(title)) {
            throw new Error(
                `There is no book with title "${title}" in the library`
            );
        } else {
            const index = this.#books.indexOf(title);
            console.log(index);
            this.#books.splice(index, 1);
        }
        console.log(this.showAllBooks());
    }

    hasBook(title) {
        if (this.#books.includes(title)) {
            return true;
        } else {
            return false;
        }
    }
}

const library = new Library(["Book 1", "Book 3", "Book 2"]);

console.log(library.showAllBooks());
library.addBook("Book 4");
library.removeBook("Book 2");
console.log(library.hasBook("Book 2"));

/* Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их. 
Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.
*/

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

console.log(`
Задача 2
`);

const divEl = document.querySelector(".container_feedback");

initialData.forEach((element) => {
    divEl.innerHTML += `<div class="card_feedback">
        <h2>${element.product}</h2>
        <p>${element.reviews[0].text}</p>
    </div>
    <input class="input_feedback" type="text">
    <button class="btn_feedback">Опубликовать</button>`;
});

const addFeedback = () => {
    divEl.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn_feedback")) {
            const inputEl = e.target.previousElementSibling;

            const text = inputEl.value;

            if (text.length < 50 || text.length > 500) {
                throw new Error("Отзыв должен быть от 50 до 500 символов");
            } else {
                const cardEl = inputEl.previousElementSibling;
                cardEl.innerHTML += `<p>${text}</p>`;
                inputEl.value = "";
            }
        }
    });
};

addFeedback();
