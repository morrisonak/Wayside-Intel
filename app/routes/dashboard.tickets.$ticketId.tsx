import { ActionFunction, LoaderFunction, json } from "@remix-run/node";
import { useLoaderData, Link, Form, useNavigation } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Textarea } from "~/components/ui/textarea";
import { Label } from "~/components/ui/label";
import { supabase } from "~/utils/supabase.server";

export const loader: LoaderFunction = async ({ params }) => {
  const [ticketResult, commentsResult] = await Promise.all([
    supabase
      .from("dashboard_tickets")
      .select("*")
      .eq("id", params.ticketId)
      .single(),
    supabase
      .from("ticket_comments")
      .select("*")
      .eq("ticket_id", params.ticketId)
      .order("created_at", { ascending: true })
  ]);

  if (ticketResult.error) throw ticketResult.error;
  if (!ticketResult.data) throw new Response("Ticket not found", { status: 404 });

  return json({ 
    ticket: ticketResult.data,
    comments: commentsResult.data || []
  });
};

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  
  if (formData.has("comment")) {
    const comment = formData.get("comment");
    const { error } = await supabase
      .from("ticket_comments")
      .insert([
        {
          ticket_id: params.ticketId,
          content: comment,
          created_at: new Date().toISOString()
        }
      ]);
    if (error) throw error;
    return json({ success: true });
  }

  if (formData.has("status")) {
    const status = formData.get("status");
    const { error } = await supabase
      .from("dashboard_tickets")
      .update({ status })
      .eq("id", params.ticketId);
    if (error) throw error;
    return json({ success: true });
  }
};

export default function TicketDetail() {
  const { ticket, comments } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="space-y-6 max-w-2xl">
      <Card>
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle>Ticket #{ticket.id}</CardTitle>
            <Badge variant="secondary">{ticket.status}</Badge>
          </div>
          <CardDescription>Created by {ticket.customer}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">Issue Description</h3>
            <p className="text-sm text-gray-500">{ticket.issue}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <Link to="/dashboard/tickets">Back to Tickets</Link>
          </Button>
          <div className="space-x-2">
            <Form method="post" className="inline">
              <input type="hidden" name="status" value="resolved" />
              <Button type="submit" variant="outline">Resolve Ticket</Button>
            </Form>
            <Form method="post" className="inline">
              <input type="hidden" name="status" value="closed" />
              <Button type="submit" variant="destructive">Close Ticket</Button>
            </Form>
          </div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Comments</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="border-b pb-4">
              <p className="text-sm text-gray-500">{comment.content}</p>
              <time className="text-xs text-gray-400 mt-1">
                {new Date(comment.created_at).toLocaleString()}
              </time>
            </div>
          ))}

          <Form 
            method="post" 
            className="space-y-4 pt-4"
            key={isSubmitting ? "submitting" : "idle"}>
            <div className="space-y-2">
              <Label htmlFor="comment">Add Comment</Label>
              <Textarea
                id="comment"
                name="comment"
                required
                placeholder="Type your comment here..."
                className="min-h-[100px]"
              />
            </div>
            <Button type="submit">Post Comment</Button>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}