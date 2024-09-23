import { commonAPI } from "./commonAPI";
import { server_url } from "./server_url";

// upload Video
export const uploadVideoAPI = async (video) => {
    return await commonAPI("POST", `${server_url}/allVideos`, video)
}

// get all videos
export const getALLuploadVideoAPI = async () => {
    return await commonAPI("GET", `${server_url}/allVideos`, "")
}

// get a video
export const getAVideoAPI = async (id) => {
    return await commonAPI("POST", `${server_url}/allVideos/${id}`, "")
}

// delete a video
export const deleteVideoAPI = async (id) => {
    return await commonAPI("DELETE", `${server_url}/allVideos/${id}`, {})
}

// add history
export const addHistoryAPI = async (video) => {
    return await commonAPI("POST", `${server_url}/history/`, video)
}

// getHistory
export const getHistoryAPI = async (id) => {
    return await commonAPI("GET", `${server_url}/history/${id}`, {})
}

// delete history
export const deleteHistoryAPI = async (id) => {
    return await commonAPI("DELETE", `${server_url}/history/${id}`, {})
}

// add category
export const addcategoryAPI = async (category) => {
    return await commonAPI("POST", `${server_url}/category`, category)
}
// get category
export const getcategoryAPI = async () => {
    return await commonAPI("GET", `${server_url}/category`, "")
}

// get category
export const deletecategoryAPI = async (id) => {
    return await commonAPI("DELETE", `${server_url}/category/${id}`, {})
}