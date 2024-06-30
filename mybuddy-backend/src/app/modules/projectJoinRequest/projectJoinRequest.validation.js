// src/app/modules/projectJoinRequest/projectJoinRequest.validation.js
import { z } from "zod";

export const createProjectJoinRequestZodSchema = z.object({
body:z.object({
   projectId: z.string({
      required_error: "Project ID is required",
   }),
   requestedBy: z.string({
      required_error: "Requested By ID is required",
   }),
   requestedTo: z.string({
      required_error: "Requested To ID is required",
   }),
   status: z.enum(["Pending", "Accepted", "Rejected","Cancelled"], {
      required_error: "Status is required and must be one of 'Pending', 'Accepted', 'Rejected','Cancelled'",
   }),
   tasks: z.array(
     z.object({
       title: z.string(),
       details: z.string(), 
       budget: z.string(), 
     })
   ).optional(),
   
  })
});

export const updateStatusZodSchema = z.object({
 body: z.object({
    status: z.string().refine(value => ["Pending", "Accepted", "Rejected","Cancelled"].includes(value), {
      message: "Status must be one of 'Pending', 'Accepted', 'Rejected','Cancelled'",
    }),
 }).strict(),
});