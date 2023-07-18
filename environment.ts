import dotenv from 'dotenv'

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID as string
export const dataset = process.env.SANITY_STUDIO_PROJECT_DATASET as string
export const readToken = process.env.SANITY_STUDIO_READ_TOKEN as string
