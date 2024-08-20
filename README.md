# Find My Apartment

This project is a full-stack web application built with Next.js (TypeScript), Node.js (TypeScript), and Docker, designed to help users find apartments for sale or rent.

## Project Structure

- **Client**: Located in the `find-my-apartment-client` directory, the client is a Next.js application running on port 3000.
- **Server**: Located in the `find-my-apartment-server` directory, the server is a Node.js application running on port 4000.

## Data Population

The server includes a `populate` method that initializes the database with predefined data. This data is stored in the `data` directory within the `dummy-data.json` file and is automatically loaded into the database when it starts.

## Features

### Client
- **View Apartment Listings**: Users can browse a list of available apartments.
- **View Apartment Details**: Users can view detailed information about a specific apartment.

### Server
- **Manage Amenities**:
    - Create, edit, and delete amenities.
    - List available amenities.
- **Manage Apartments**:
    - List all apartments.
    - Get details of a specific apartment.
    - Create new apartment listings.

## Getting Started

To run this project, ensure Docker is installed on your machine. Once Docker is set up, you can start the application by running the following command in your terminal:

```bash
docker-compose up
