#ifndef STACK_H
#define STACK_H

#include <vector>
#include <stdexcept>

template <typename T>
class Stack {
    std::vector<T> data;

public:
    void push(const T& item) {
        data.push_back(item);
    }

    void pop() {
        if (data.empty()) throw std::out_of_range("Stack is empty!");
        data.pop_back();
    }

    T& top() {
        if (data.empty()) throw std::out_of_range("Stack is empty!");
        return data.back();
    }

    bool empty() const {
        return data.empty();
    }

    int size() const {
        return data.size();
    }
};

#endif
