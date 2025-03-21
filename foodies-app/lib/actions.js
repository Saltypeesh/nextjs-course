'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInValidText(text) {
  return !text || (typeof text === 'string' && text.trim() === '');
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  }

  if (
    isInValidText(meal.title) ||
    isInValidText(meal.summary) ||
    isInValidText(meal.instructions) ||
    isInValidText(meal.image) ||
    isInValidText(meal.creator) ||
    isInValidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: 'Invalid input.',
      values: {
        title: meal.title || '',
        summary: meal.summary || '',
        instructions: meal.instructions || '',
        name: meal.creator || '',
        email: meal.creator_email || ''
      }
    };
  }

  await saveMeal(meal);
  revalidatePath('/meals');
  redirect('/meals');
}