import * as yup from 'yup'

export const TASK_VALIDATION_SCHEMA = yup.object({
  name: yup
    .string()
    .trim()
    .min(2)
    .max(64)
    .required()
})
