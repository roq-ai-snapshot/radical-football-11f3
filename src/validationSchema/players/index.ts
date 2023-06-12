import * as yup from 'yup';
import { parentRequestValidationSchema } from 'validationSchema/parent-requests';

export const playerValidationSchema = yup.object().shape({
  notes: yup.string(),
  user_id: yup.string().nullable().required(),
  academy_id: yup.string().nullable().required(),
  coach_id: yup.string().nullable(),
  parent_request: yup.array().of(parentRequestValidationSchema),
});
