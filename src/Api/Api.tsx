import axios from "axios";

import type { ServiceItem, BlogItem } from "../components/types/AllType";


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
// CONTACT FORM TYPES
// ==============================

export type ContactFormData = {
  name: string;
  business_family_office_name: string;
  email: string;
  phone: string;
  business_owner_or_family_office: string;
  support_needed: string[];
  books_current: string;
  accounting_system: string;
  message: string;
};

// ==============================
// CONTACT FORM API
// ==============================

export const contactentries = async (
  data: ContactFormData
) => {
  try {
    const response = await axios.post(
      "https://finance-ally.ahaanmedia.com/wp-json/contact-entry/v1/submit",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(
      "Contact Form API Error:",
      error
    );

    throw error;
  }
};

// ==============================
// LATEST BLOGS API
// ==============================

export const getLatestBlogs = async (): Promise<
  BlogItem[]
> => {
  try {
    const response = await api.get(
      "/posts?_embed&per_page=2&orderby=date&order=desc"
    );

    return response.data;
  } catch (error) {
    console.log(
      "Latest Blogs API Error:",
      error
    );

    return [];
  }
};

// ==============================
// BLOGS API
// ==============================

export const getBlogs = async (): Promise<
  BlogItem[]
> => {
  try {
    const response = await api.get(
      "/posts?_embed"
    );

    return response.data;
  } catch (error) {
    console.log("Blogs API Error:", error);

    return [];
  }
};

export const getSingleBlog = async (
  slug: string
): Promise<BlogItem | null> => {
  try {
    const response = await api.get(
      `/posts?slug=${slug}&_embed`
    );

    return response.data[0];
  } catch (error) {
    console.log(
      "Single Blog API Error:",
      error
    );

    return null;
  }
};

export default api;