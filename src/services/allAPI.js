import Category from "../components/Category"
import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./server_url"

//upload video - store video in http://localhost:3000/allVideos
export const uploadVideoAPI = async (video)=>{
    //send response to add compoent
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)

}


//get video api called by view
export const getAllvideoAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")


}


//store watch history 
export const saveHistoryAPI = async (videoDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}

//get history to watch component to http://localhost:3000/history
export const getHistoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

//remove history to watch compoenet
export const removeHistoryAPI = async (videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}

//remove video
export const removeVideoAPI = async (videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${videoId}`,{})
}

//save category to category compoenet
export const addCategoryAPI = async (categoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/Categories`,categoryDetails)
}

//get categrory to category component
export const getCategoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/Categories`,"")
}

//remove category api
export const removeCategoryAPI = async (CategoryId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/Categories/${CategoryId}`,{})
}

//get single video api
export const getAVideoAPI = async (videoId)=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${videoId}`,"")

}

//updatecategory api
export const updateCategoryAPI = async (CategoryId,updateCategoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/Categories/${CategoryId}`,updateCategoryDetails)
}

//get single category video api
export const getSingleCategoryAPI = async (CategoryId)=>{
    return await commonAPI("GET",`${SERVER_URL}/Categories/${CategoryId}`,"")

}

