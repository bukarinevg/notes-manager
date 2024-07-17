'use server';

import HomePage from "@/components/HomePage";
import connectToDatabase from "@/lib/mongoose";
import Note from "@/models/Note";

export default async function Home() {

  await connectToDatabase();

  const notes = await Note.find({});
  
  return (
   <HomePage
   existingNotes={notes}
   />
  );
}
