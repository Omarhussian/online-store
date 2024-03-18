# Fish Store Task Documentation

## Introduction
This documentation provides an overview of the fish store task completed using React, Redux, and Ant Design,tailwindcss . The task involved creating a web application for fish store items, allowing users to view, edit, and update product details.

## Technologies Used
- React
- Redux
- Ant Design
- TailWindCss

## Components Overview

### InventoryItem
- Responsible for displaying and updating individual inventory items.
- Includes input fields for editing product details (name, price, description).
- Utilizes a dropdown menu for changing product status (available/unavailable).

### ListComponent
  - This component is responsible for rendering the Products of the Fish Store application from redux.
  - Utilizes Ant Design's List component to display inventory items.
  - Allows users to view product details such as name, price, description, and image.
  - Provides functionality to add available products to the cart.
  - Includes animations for indicating unavailable products.

### UnAvailable
- Animated component for handling unavailable items, providing a visual indicator.

### Cart Component
  - The `Cart` component displays the items added to the shopping cart in the Fish Store application.
  - Calculates the total price of all items in the cart.
  - Renders a list of items in the cart with their quantities and prices.
  - Displays the total price of all items in the cart.

## Functionality Overview
- Users can view a list of inventory items with their details.
- Editable input fields allow users to update product information (name, price, description).
- A dropdown menu enables users to change the status of products (available/unavailable).
- Redux is used to manage state and handle updates, ensuring data consistency across components.
- Ant Design components are integrated and customized for a consistent and user-friendly interface.
- Utilizes Redux Persist to save the app data in the local storage, ensuring persistence of app state across sessions.

## Implementation Details
- Redux actions and reducers are used to handle state updates and manage product data.
- Ant Design Dropdown component is customized to include a down arrow icon and open on click.
- Event handlers are implemented to capture user input and update the Redux store with product changes.


Follow these steps to run the Fish Store application locally:

1. **Clone the Repository**: 
   - Open a terminal window and navigate to the directory where you want to clone the repository.
   - Run the following command to clone the repository:
     ```
     git clone <repository-url>
     ```

2. **Install Dependencies**:
   - Navigate into the cloned repository directory using the terminal.
   - Run the following command to install the necessary dependencies using yarn:
     ```
     yarn install
     ```

3. **Start the Application**:
   - After installing the dependencies, run the following command to start the application:
     ```
     yarn start
     ```

4. **View the Application**:
   - Once the application has started successfully, open a web browser and navigate to `http://localhost:3000` to view the Fish Store application.

5. **Interact with the Application**:
   - You can now interact with the application by adding items to the cart, viewing the inventory, and managing products.
