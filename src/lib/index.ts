import { z } from "zod";


 export type Todo = {
  id: number,
  title: string
}

export const formSchema = z.object({
id: z.number(),
title: z.string()
});

export type FormValues = z.infer<typeof formSchema>;





