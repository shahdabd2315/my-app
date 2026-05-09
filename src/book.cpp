#include "book.h"

Book::Book(int id, std::string title, std::string author, int year)
    : id(id), title(title), author(author), year(year) {}

int Book::getId() const { return id; }
std::string Book::getTitle() const { return title; }
std::string Book::getAuthor() const { return author; }
int Book::getYear() const { return year; }

void Book::display() const {
    std::cout << id << " - " << title << " by " << author << " (" << year << ")" << std::endl;
}

bool Book::operator==(const Book& other) const {
    return id == other.id;
}

bool Book::operator<(const Book& other) const {
    return title < other.title;
}

bool Book::operator>(const Book& other) const {
    return title > other.title;
}

std::ostream& operator<<(std::ostream& os, const Book& b) {
    os << b.id << ": " << b.title << " (" << b.year << ")";
    return os;
}

std::istream& operator>>(std::istream& is, Book& b) {
    std::cout << "Enter ID: ";
    is >> b.id;
    std::cout << "Enter Title: ";
    is >> b.title;
    std::cout << "Enter Author: ";
    is >> b.author;
    std::cout << "Enter Year: ";
    is >> b.year;
    return is;
}
