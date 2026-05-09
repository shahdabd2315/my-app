#ifndef BOOK_H
#define BOOK_H

#include <string>
#include <iostream>

class Book {
protected:
    int id;
    std::string title;
    std::string author;
    int year;

public:
    Book(int id = 0, std::string title = "", std::string author = "", int year = 0);
    virtual ~Book() = default;

    int getId() const;
    std::string getTitle() const;
    std::string getAuthor() const;
    int getYear() const;

    virtual void display() const;

    // Operator Overloading
    bool operator==(const Book& other) const;
    bool operator<(const Book& other) const;
    bool operator>(const Book& other) const;

    // Stream operators
    friend std::ostream& operator<<(std::ostream& os, const Book& b);
    friend std::istream& operator>>(std::istream& is, Book& b);
};

#endif
