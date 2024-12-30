// app/routes/tickets.new.tsx
import { ActionFunction, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { supabase } from "~/utils/supabase.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const customer = formData.get("customer");
  const issue = formData.get("issue");

  const { error } = await supabase
    .from("dashboard_tickets")
    .insert([
      {
        customer,
        issue,
        status: "open"
      }
    ]);

  if (error) throw error;

  return redirect("/dashboard/tickets");
};

export default function NewTicket() {
  return (
    <Card className="max-w-2xl ">
      <Form method="post">
        <CardHeader>
          <CardTitle>Create New Ticket</CardTitle>
          <CardDescription>Submit a new support ticket</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="customer">Customer Name</Label>
            <Input
              id="customer"
              name="customer"
              required
              placeholder="Enter customer name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="issue">Issue Description</Label>
            <Textarea
              id="issue"
              name="issue"
              required
              placeholder="Describe the issue"
              className="min-h-[100px]"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Create Ticket</Button>
        </CardFooter>
      </Form>
    </Card>
  );
}