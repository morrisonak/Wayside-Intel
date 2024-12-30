/* eslint-disable react-hooks/rules-of-hooks */
import Ticket from "~/components/tickets";
import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { supabase } from "~/utils/supabase.server";

export const loader: LoaderFunction = async () => {
  const { data: tickets, error } = await supabase
    .from("dashboard_tickets")
    .select("*");

  if (error) {
    console.error("Error fetching resources:", error);
    throw new Error("Failed to load resources");
  }
  console.log(tickets);
  return json({ tickets });
};

export default function ticketIndex() {
  const { tickets } = useLoaderData<typeof loader>();

  return (
    <>
       <Ticket tickets={tickets} />
    </>
  );
}
