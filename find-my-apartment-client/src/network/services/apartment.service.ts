import client from '@/network/client';
import {APARTMENT_ROUTES} from "@/network/routes";

export async function getApartmentList(currentPage: number, limit: number) {
    try {
        return await client.get({url: APARTMENT_ROUTES.LIST_APARTMENTS, config: {params: {page: currentPage, limit: limit}}});
    } catch (e: any) {
        return e.response
    }
}

export async function getApartmentDetails(id: string) {
    try {
        return await client.get({url: APARTMENT_ROUTES.GET_APARTMENT_DETAILS, config: {params: {id}}});
    } catch (e: any) {
        return e.response
    }
}
