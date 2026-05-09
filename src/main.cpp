#include <iostream>
#include <map>
#include <memory>
#include <algorithm>
#include <vector>
#include "book.h"
#include "stack.h"

// Abstract base class Shape
class Shape {
public:
    virtual double area() const = 0;
    virtual void display() const = 0;
    virtual ~Shape() = default;
};

class Circle : public Shape {
    double radius;
public:
    Circle(double r) : radius(r) {}
    double area() const override { return 3.14 * radius * radius; }
    void display() const override {
        std::cout << "Circle radius=" << radius << " area=" << area() << std::endl;
    }
};

class Rectangle : public Shape {
    double width, height;
public:
    Rectangle(double w, double h) : width(w), height(h) {}
    double area() const override { return width * height; }
    void display() const override {
        std::cout << "Rectangle " << width << "x" << height << " area=" << area() << std::endl;
    }
};

int main() {
    try {
        // استخدام map لتخزين الكتب مع shared_ptr
        std::map<int, std::shared_ptr<Book>> library;

        auto addBook = [&](int id, std::shared_ptr<Book> book) {
            if (library.find(id) != library.end()) {
                throw std::runtime_error("Book with same ID already exists!");
            }
            library[id] = book;
        };

        addBook(1, std::make_shared<Book>(1, "C++ Primer", "Lippman", 2012));
        addBook(2, std::make_shared<Book>(2, "Effective C++", "Scott Meyers", 2005));
        addBook(3, std::make_shared<Book>(3, "Clean Code", "Robert Martin", 2008));

        std::cout << "--- Library Books ---" << std::endl;
        for (const auto& [id, book] : library) book->display();

        // STL algorithm: فرز
        std::vector<std::shared_ptr<Book>> books;
        for (const auto& [id, book] : library) books.push_back(book);
        std::sort(books.begin(), books.end(),
                  [](const auto& a, const auto& b) { return a->getTitle() < b->getTitle(); });

        std::cout << "\n--- Sorted by Title ---" << std::endl;
        for (const auto& b : books) b->display();

        // STL algorithm: بحث
        std::string searchTitle = "Effective C++";
        auto it = std::find_if(books.begin(), books.end(),
                               [&](const auto& b) { return b->getTitle() == searchTitle; });
        if (it != books.end()) std::cout << "\nFound: " << **it << std::endl;

        // STL algorithm: تجميع (عدد الكتب لكل مؤلف)
        std::map<std::string,int> authorCount;
        for (const auto& b : books) authorCount[b->getAuthor()]++;
        std::cout << "\n--- Books per Author ---" << std::endl;
        for (const auto& [author, count] : authorCount)
            std::cout << author << ": " << count << std::endl;

        // Stack<T>
        Stack<int> s;
        s.push(10); s.push(20); s.push(30);
        std::cout << "\nTop of stack: " << s.top() << std::endl;
        s.pop();
        std::cout << "Top after pop: " << s.top() << std::endl;

        // Operator Overloading
        Book b1(4, "Alpha", "Author A", 2020);
        Book b2(5, "Beta", "Author B", 2021);
        std::cout << "\nCompare b1 > b2 ? " << (b1 > b2 ? "Yes" : "No") << std::endl;

        // Shapes مع unique_ptr
        std::vector<std::unique_ptr<Shape>> shapes;
        shapes.push_back(std::make_unique<Circle>(5));
        shapes.push_back(std::make_unique<Rectangle>(4,6));

        std::cout << "\n--- Shapes ---" << std::endl;
        for (const auto& sh : shapes) sh->display();

        // تجربة إدخال عدة كتب من المستخدم
        int n;
        std::cout << "\nHow many books do you want to enter? ";
        std::cin >> n;

        std::vector<Book> userBooks(n);
        for (int i = 0; i < n; i++) {
            std::cout << "\nEnter book " << i+1 << ":\n";
            std::cin >> userBooks[i];
        }

        std::cout << "\nYou entered:\n";
        for (const auto& b : userBooks) {
            std::cout << b << std::endl;
        }

    } catch (const std::exception& e) {
        std::cerr << "Exception: " << e.what() << std::endl;
    }
    return 0;
}
