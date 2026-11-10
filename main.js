"use strict";
class User {
    id;
    name;
    email;
    password;
    phone;
    age;
    notebooks = [];
    constructor(id, name, email, password, phone, age) {
        if (age < 18 || age > 60) {
            throw new Error("Age must be between 18 and 60");
        }
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
    }
    displayInfo() {
        console.log("User Information:");
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Email:", this.email);
        console.log("Phone:", this.phone);
        console.log("Age:", this.age);
    }
    addNotebook(notebook) {
        this.notebooks.push(notebook);
    }
}
class Admin extends User {
    manageNotes() {
        console.log("Admin is managing notes");
    }
}
class Note {
    id;
    title;
    content;
    userId;
    constructor(id, title, content, userId) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }
    preview() {
        return this.content.substring(0, 30) + "...";
    }
}
class NoteBook {
    notes = [];
    addNote(note) {
        this.notes.push(note);
        console.log("Note added successfully");
    }
    removeNote(id) {
        this.notes = this.notes.filter(note => note.id !== id);
        console.log("Note removed successfully");
    }
    getAllNotes() {
        return this.notes;
    }
}
// 5. Aggregation - User and NoteBook
// User contains a collection of NoteBook objects.
// NoteBook objects can exist independently of User.
// 6. Association - Note and User
// Each Note has a User as its author.
// This relationship is represented by userId in Note.
class MyStorage {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter(i => i !== item);
    }
    getAllItems() {
        return this.items;
    }
}
// Testing the System
const user1 = new User(1, "Ahmed", "ahmed@gmail.com", "123456", "01000000000", 25);
user1.displayInfo();
const admin1 = new Admin(2, "Mohamed", "admin@gmail.com", "admin123", "01100000000", 30);
admin1.manageNotes();
const note1 = new Note(1, "First Note", "This is my first note in the system", user1);
console.log(note1.preview());
const notebook1 = new NoteBook();
notebook1.addNote(note1);
user1.addNotebook(notebook1);
console.log(notebook1.getAllNotes());
notebook1.removeNote(1);
// Testing Generic Storage
const numberStorage = new MyStorage();
numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.addItem(30);
console.log(numberStorage.getAllItems());
const stringStorage = new MyStorage();
stringStorage.addItem("Hello");
stringStorage.addItem("TypeScript");
console.log(stringStorage.getAllItems());
