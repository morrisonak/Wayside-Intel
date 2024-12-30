


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "~/components/ui/accordion"
  import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
  
    const knowledgeBase = [
      {
        category: "Project Initiation",
        items: [
          { title: "Project Charter", content: "A document that formally authorizes the existence of a project and provides the project manager with the authority to apply organizational resources to project activities." },
          { title: "Stakeholder Analysis", content: "The process of identifying the individuals or groups that are likely to affect or be affected by a proposed action, and sorting them according to their impact on the action and the impact the action will have on them." },
          { title: "Feasibility Study", content: "An assessment of the practicality of a proposed project or system." },
        ]
      },
      {
        category: "Project Planning",
        items: [
          { title: "Work Breakdown Structure (WBS)", content: "A deliverable-oriented hierarchical decomposition of the work to be executed by the project team to accomplish the project objectives and create the required deliverables." },
          { title: "Project Schedule", content: "A document that lists all the project tasks, their durations, the resources assigned to them, and their scheduled start and finish dates." },
          { title: "Risk Management Plan", content: "A document that identifies potential project risks and outlines strategies to mitigate or avoid them." },
          { title: "Budget Planning", content: "The process of estimating, allocating, and controlling project costs." },
        ]
      },
      {
        category: "Project Execution",
        items: [
          { title: "Team Management", content: "The process of leading and directing project team members, including assigning tasks, providing feedback, and resolving conflicts." },
          { title: "Quality Assurance", content: "The process of auditing the specific project requirements to ensure that the project adheres to quality standards." },
          { title: "Communication Management", content: "The process of planning, collecting, creating, distributing, storing, retrieving, managing, controlling, and monitoring project information." },
        ]
      },
      {
        category: "Monitoring and Control",
        items: [
          { title: "Performance Tracking", content: "The process of measuring project performance against the project management plan and project performance baseline." },
          { title: "Change Control", content: "The process of reviewing all change requests, approving changes, and controlling changes to deliverables, organizational process assets, project documents, and the project management plan." },
          { title: "Earned Value Management", content: "A project management technique for measuring project performance and progress in an objective manner." },
        ]
      },
      {
        category: "Project Closing",
        items: [
          { title: "Project Handover", content: "The process of transferring the final product and all necessary documentation to the client or end-user." },
          { title: "Lessons Learned", content: "The knowledge gained during a project which shows how project events were addressed or should be addressed in the future with the purpose of improving future performance." },
          { title: "Project Closure Report", content: "A document that formally closes the project, including a summary of the project outcomes, final budget, and schedule information." },
        ]
      },
    ]
  
    export function ProjectManagementKB() {
  

    return (
      <div className="container mx-auto p-4">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Project Management Knowledge Base</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {knowledgeBase.map((category, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-lg font-semibold">{category.category}</AccordionTrigger>
                <AccordionContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((item, itemIndex) => (
                      <AccordionItem value={`subitem-${index}-${itemIndex}`} key={itemIndex}>
                        <AccordionTrigger className="text-md font-medium">{item.title}</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm text-gray-600">{item.content}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
      </div>
    )
  }
  
 
  
  