# Podcast Manager

This project is a Podcast Manager built using Node.js, React, and a custom web API without any framework. It allows users to manage their podcast library efficiently, providing functionalities to add, edit, and delete podcasts.

## Features

- **Add Podcasts:** Easily add new podcasts to your library with essential details.
- **Edit Podcasts:** Update information for existing podcasts.
- **Delete Podcasts:** Remove podcasts from your library.
- **Custom Web API:** Utilizes a custom-built web API for managing podcast data.

## Code Overview

### Backend (Node.js)

- **Server Setup:** The server is set up using Node.js with Express.js to handle HTTP requests and responses.
- **Routes:** Custom routes are defined for CRUD operations on podcasts.
  - **GET /podcasts:** Fetch all podcasts.
  - **POST /podcasts:** Add a new podcast.
  - **PUT /podcasts/:id:** Update an existing podcast.
  - **DELETE /podcasts/:id:** Delete a podcast.
- **Data Storage:** Podcasts data is stored in a simple JSON file, simulating a database.

### Frontend (React)

- **Components:**
  - **PodcastList:** Displays the list of podcasts.
  - **PodcastForm:** Form for adding and editing podcasts.
  - **PodcastItem:** Individual podcast item with edit and delete options.
- **State Management:** Uses React's state and context API to manage application state.
- **API Integration:** Makes HTTP requests to the backend API to perform CRUD operations.

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/pedrowillen/podcast-manager-node-react-webapi-no-framework.git
   cd podcast-manager-node-react-webapi-no-framework
2. **Install dependencies:**
   ```sh
   npm install
3. **Start the application:**
   ```sh
   npm run start:dev

## Usage
- Navigate to **http://localhost:3333** to access the Podcast Manager.
- Use the interface to add, edit, or delete podcasts.
