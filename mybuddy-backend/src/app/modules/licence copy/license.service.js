import { License } from './license.model.js';
import { ApiError } from "../../../handleError/apiError.js";
import httpStatus from "http-status";

export const createLicenseService = async (data) => {
  try {
    const result = await License.create(data);
    if (!result) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Failed to create license");
    }
    return result;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

export const getLicensesByUserService = async (userId) => {
    try {
      const licences = await License.find({ user: userId });
      return licences;
    } catch (error) {
      console.error("Error fetching licenses by user:", error);
      throw new Error("Failed to fetch licenses by user");
    }
  }

export const updateLicenseService = async (userId, data) => {
  try {
    const isExist = await License.findOne({ user: userId });
    if (!isExist) {
      throw new ApiError(httpStatus.NOT_FOUND, "License not found");
    }

    const updatedLicense = await License.findOneAndUpdate(
      { user: userId },
      { $set: {...data } },
      { new: true }
    );

    if (!updatedLicense) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Couldn't update license");
    }

    return updatedLicense;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};