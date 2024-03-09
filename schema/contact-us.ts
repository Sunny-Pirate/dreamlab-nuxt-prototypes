import {z} from 'zod'
import type {LeadFiltersInput} from "#gql"
import {Enum_Lead_Status, Enum_Lead_Scope} from "#gql/default";

export const leadSchema = z.object({
    fullName: z.string().min(5).max(15)
        .optional()
    ,
    email: z.string().email().min(1)
        .optional()
    ,
    businessName: z.string().optional(),
    website: z.string().url().optional(),
    scope: z.nativeEnum(Enum_Lead_Scope).optional(),
    concept: z.string().optional(),
    budget: z.number().optional(),
    timeline: z.string().datetime().optional(),
    referrals: z.object({id: z.string()}).array().optional(),
    message: z.string().min(10).max(4000)
        .optional()
    ,
    isPrivacyAccepted: z.boolean(),
    isBusinessRequest: z.boolean(),
})

export type LeadDto = z.output<typeof leadSchema>
