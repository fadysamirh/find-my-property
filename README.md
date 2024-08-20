## General
This project leverages nextjs (typescript), nodejs (typescript) and docker to create
website that lists apartments for sale or rent.

The client is located in the find-my-apartment-client directory and the server is located in the find-my-apartment-server directory.
The client runs on port 3000 and the server runs on port 4000.

The server has populate method that populates the database with some data that is contained in data directory in populate.ts file.

The data is contained in the data directory in dummy-data.json file. The data is in json format. The data is loaded into the database when the database starts.

## Client Features:
- [x] User can view a list of apartments
- [x] User can view details of an apartment

## Server Features:
- [x] Server can create amenities
- [x] Server can edit amenities
- [x] Server can delete amenities
- [x] Server can list amenities
- [x] Server can list apartments
- [x] Server can get details of an apartment
- [x] Server can create an apartment

To run the project, you will need to have docker installed on your machine 
and run 
```
docker-compose up
```
