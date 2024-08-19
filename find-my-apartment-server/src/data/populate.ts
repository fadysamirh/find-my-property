import AmenityModel from "../models/mongo/amenity.model";
import ApartmentModel from "../models/mongo/apartment.model";

const jsonData = require('./dummy-data.json');

export async function populate() {
    await AmenityModel.deleteMany({});
    await ApartmentModel.deleteMany({});

    const amenities = jsonData.amenities;
    for (let i = 0; i < amenities.length; i++) {
        await AmenityModel.create(amenities[i]);
    }

    const apartments = jsonData.apartments;
    for (let i = 0; i < apartments.length; i++) {
        apartments[i].amenities = apartments[i].amenitiesIds.map((amenityId: string) => amenities.find((a: any) => a._id === amenityId));
        await ApartmentModel.create(apartments[i]);
    }

    console.log('Data populated successfully');
}
