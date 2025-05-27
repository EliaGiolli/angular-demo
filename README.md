# Angular Demo

This repository contains an Angular demo application that showcases a user card component with modern SCSS styling and a modular structure.

## Features

- Angular 19+ application
- User card component with responsive SCSS
- Modular and maintainable project structure
- Server-Side Rendering (SSR) with Express
- Ready-to-use scripts for development, build, and testing

## What I've Learned

This project demonstrates several core Angular concepts:

### Parent-Child Component Interaction

- **@Input() Decorator:**  
  The parent component passes data (such as user information) to the child `user-card` component using Angular's `@Input()` decorator. This allows the child component to receive and display dynamic content.

- **@Output() and EventEmitter:**  
  The child component communicates back to the parent using the `@Output()` decorator and Angular's `EventEmitter`. For example, when a button is clicked in the user card, an event is emitted to notify the parent component, which can then react accordingly.

- **Component Communication Example:**
  ```typescript
  // In parent.component.html
  <app-user-card [user]="selectedUser" (cardClicked)="onCardClicked($event)"></app-user-card>
  ```

  ```typescript
  // In user-card.component.ts
  @Input() user: User;
  @Output() cardClicked = new EventEmitter<User>();

  onClick() {
    this.cardClicked.emit(this.user);
  }
  ```

### SCSS and Styling

- Used Angular's SCSS support for modular, maintainable, and responsive component styles.
- Leveraged SCSS variables and nesting for clean and scalable CSS.

### Project Structure

- Organized code into feature modules and components for scalability.
- Used a shared folder for reusable components and styles.

### Server-Side Rendering (SSR)

- Integrated SSR using Angular Universal and Express for improved SEO and performance.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Angular CLI](https://angular.io/cli)

### Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/your-username/angular-demo.git
cd angular-demo
npm install
```

### Running the Application

Start the development server:

```sh
npm start
```

The app will be available at [http://localhost:4200/](http://localhost:4200/).

### Building for Production

```sh
npm run build
```

### Running Tests

```sh
npm test
```

## License

This project is licensed under the MIT License.

---

Feel free to contribute or open issues for suggestions and improvements!