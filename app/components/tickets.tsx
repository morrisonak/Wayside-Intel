import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "~/components/ui/table";
import { Badge } from "~/components/ui/badge";

interface Ticket {
  id: string;
  customer: string;
  issue: string;
  status: string;
}

interface TicketProps {
  tickets: Ticket[];
}

export default function Ticket({ tickets }: TicketProps) {
  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
      <Card className="sm:col-span-2">
        <CardHeader className="pb-3">
          <CardTitle>Support Tickets</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            View and manage your support tickets.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ticket</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Issue</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tickets.map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell className="font-medium">
                    <Link to={`${ticket.id}`} className="hover:underline">
                      {ticket.id}
                      </Link>
                  </TableCell>

                  <TableCell>{ticket.customer}</TableCell>
                  <TableCell>{ticket.issue}</TableCell>
                  <TableCell>
                    <Badge className="text-xs" variant="secondary">
                      {ticket.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                  <Link to={`${ticket.id}`} className="hover:underline">
                    <Button size="icon" variant="outline">
                      <FilePenIcon className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    </Link>
                  </TableCell>
                </TableRow>
                
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <Link to="new">
            <Button>
              <PlusIcon className="h-4 w-4 mr-2" />
              Create Ticket
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

function FilePenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
