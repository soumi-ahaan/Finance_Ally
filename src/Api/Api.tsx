import axios from "axios";

import type { ServiceItem } from "../components/types/AllType";

const BASE_URL =
  "https://finance-ally.ahaanmedia.com/wp-json/wp/v2";

const api = axios.create({
  baseURL: BASE_URL,
});

// ==============================
// SERVICES API
// ==============================

export const getServices = async (): Promise<
  ServiceItem[]
> => {
  try {
    const response = await api.get(
      "/services?_embed"
    );

    return response.data;
  } catch (error) {
    console.log(
      "Services API Error:",
      error
    );

    return [];
  }
};

export const getMediaById = async (
  id: number
) => {
  try {
    const response = await api.get(
      `/media/${id}`
    );

    return response.data;
  } catch (error) {
    console.log(error);

    return null;
  }
};

// ==============================
// FUTURE APIs
// ==============================

// BLOGS
// export const getBlogs = async () => {
//   const response = await api.get("/posts?_embed");
//   return response.data;
// };

// TESTIMONIALS
// export const getTestimonials = async () => {
//   const response = await api.get("/testimonials");
//   return response.data;
// };

// TEAM
// export const getTeamMembers = async () => {
//   const response = await api.get("/team");
//   return response.data;
// };