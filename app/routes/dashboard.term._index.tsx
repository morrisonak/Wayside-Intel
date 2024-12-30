import { ActionFunctionArgs, json } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const term = formData.get("term");
  const definition = formData.get("definition");

  // Here you would typically save the data to a database
  // For this example, we'll just return the submitted data
  return json({ term, definition });
};

export default function AddTerm() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Add New Term</h1>
      <Form method="post" className="space-y-4">
        <div>
          <label htmlFor="term" className="block text-sm font-medium text-gray-700">
            Term
          </label>
          <input
            type="text"
            id="term"
            name="term"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="definition" className="block text-sm font-medium text-gray-700">
            Definition
          </label>
          <textarea
            id="definition"
            name="definition"
            required
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </Form>

      {actionData && (
        <div className="mt-4 p-4 border rounded-md bg-green-50">
          <h2 className="text-lg font-semibold text-green-800">Submitted Data:</h2>
          <p><strong>Term:</strong> {actionData.term}</p>
          <p><strong>Definition:</strong> {actionData.definition}</p>
        </div>
      )}
    </div>
  );
}