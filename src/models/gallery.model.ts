import { AppDataSource } from "../data-source";
import { Gallery } from "../entity/Gallery";
import { galleryPayload } from "../utils/payloads";

const galleryRepo = AppDataSource.getRepository(Gallery)

export class GalleryModel {
    static postCreateGallery = async (payload: galleryPayload): Promise<any> => {
        const gallery = new Gallery()
        return await galleryRepo.save({
            ...payload,
            ...gallery
        })
    }
}